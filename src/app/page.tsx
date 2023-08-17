'use client'

import BlogList from '@/app/_components/BlogList'
import SearchBar, { filterSearched } from '@/app/_components/SearchBar'
import errorToast from '@/helpers/errors'
import { useAppStore } from '@/helpers/store'
import { Heading, useToast } from '@chakra-ui/react'
import isEmpty from 'lodash/isEmpty'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const posts = useAppStore(state => state.posts)
  const authors = useAppStore(state => state.authors)
  const fetch = useAppStore(state => state.fetch)
  const toast = useToast()

  useAsyncEffect(async () => {
    if (!isEmpty(posts)) return
    try {
      await fetch()
    } catch (e) {
      errorToast(toast, "Can't fetch data")
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
