'use client'

import { getAuthors } from '@/app/_api/(authors)/getAuthors'
import { getPosts } from '@/app/_api/getPosts'
import BlogList from '@/app/_components/BlogList'
import SearchBar, { filterSearched } from '@/app/_components/SearchBar'
import { Post, User } from '@/types'
import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'

const handleError = (e: any) => {
  console.error("couldn't fetch posts or authors :", e)
  throw e
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>()
  const [authors, setAuthors] = useState<User[]>()
  const [searchTerm, setSearchTerm] = useState<string>('')

  useAsyncEffect(async () => {
    try {
      const posts = await getPosts()
      const authors = await getAuthors()
      setPosts(posts)
      setAuthors(authors)
    } catch (e) {
      handleError(e)
    }
  }, [])

  return (
    <>
      <Heading>Blog Posts</Heading>
      <SearchBar setSearchTerm={setSearchTerm} />
      {authors && posts && (
        <BlogList
          page={1}
          posts={posts.filter(post =>
            filterSearched({ searchTerm, paramsToCheck: [post.title, post.body] })
          )}
          authors={authors}
        />
      )}
    </>
  )
}
export default Home
