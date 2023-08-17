'use client'

import BlogList from '@/app/_components/BlogList'
import SearchBar, { filterSearched } from '@/app/_components/SearchBar'
import { useAppStore } from '@/helpers/store'
import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'

const handleError = (e: any) => {
  console.error("couldn't fetch posts or authors :", e)
  throw e
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const posts = useAppStore(state => state.posts)
  const authors = useAppStore(state => state.authors)
  const fetch = useAppStore(state => state.fetch)

  useAsyncEffect(async () => {
    if (posts.length != 0) return
    try {
      await fetch()
    } catch (e) {
      handleError(e)
    }
  }, [])

  return (
    <>
      <Heading>Blog Posts</Heading>
      <SearchBar setSearchTerm={setSearchTerm} value='Search posts' />
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
