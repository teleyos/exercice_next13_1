import { getAuthors } from '@/app/_api/getAuthors'
import { getPosts } from '@/app/_api/getPosts'
import { Post, User } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppStore {
  posts: Post[]
  authors: User[]
  setPosts: (posts: Post[]) => void
  setAuthors: (authors: User[]) => void
  reset: () => void
  fetch: () => void
  deletePost: (postId: number) => void
  editTitle: (postId: number, title: string) => void
  editBody: (postId: number, body: string) => void
}

export const useAppStore = create(
  persist<AppStore>(
    (set, get) => ({
      posts: [],
      authors: [],
      setPosts: posts => set({ posts }),
      setAuthors: authors => set({ authors }),
      reset: () => set({ posts: [], authors: [] }),
      fetch: async () => {
        const posts = await getPosts()
        const authors = await getAuthors()
        set({ posts, authors })
      },
      deletePost: postId => {
        set({ posts: get().posts.filter(post => post.id != postId) })
      },
      editTitle: (postId, title) => {
        set({
          posts: get().posts.map(post => {
            if (post.id != postId) return post
            return { ...post, title }
          })
        })
      },
      editBody: (postId, body) => {
        set({
          posts: get().posts.map(post => {
            if (post.id != postId) return post
            return { ...post, body }
          })
        })
      }
    }),
    {
      name: 'posts-authors-storage'
    }
  )
)
