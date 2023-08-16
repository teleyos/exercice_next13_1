'use client'
import { getAuthor } from '@/app/_api/(authors)/getAuthor'
import { getPosts } from '@/app/_api/getPosts'
import BlogList from '@/app/_components/BlogList'
import SearchBar from '@/app/_components/SearchBar'
import { Post, User } from '@/types'
import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'

export default function Author({ params }: { params: { id: string } }) {
  const [posts, setPosts] = useState<Post[]>()
  const [author, setAuthor] = useState<User>()
  const [searchTerm, setSearchTerm] = useState<string>('')

  useAsyncEffect(async () => {
    try {
      const posts = await getPosts()
      const author = await getAuthor(parseInt(params.id))
      setPosts(posts)
      setAuthor(author)
    } catch (e) {
      throw e
    }
  }, [])
  return (
    <>
      <Heading>Blog Posts from {author?.name ?? '...'}</Heading>
      <SearchBar setSearchTerm={setSearchTerm} />
      {posts && author && (
        <BlogList
          page={1}
          posts={posts
            .filter(post => post.userId == author.id)
            .filter(post => post.title.includes(searchTerm) || post.body.includes(searchTerm))}
        />
      )}
    </>
  )
}
