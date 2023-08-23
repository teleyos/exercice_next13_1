'use client'

import { BlogList } from '@/app/_components/BlogList'
import { filterSearched, SearchBar } from '@/app/_components/SearchBar'
import { errorToast } from '@/helpers/errors'
import { useAppStore } from '@/helpers/store'
import { Heading, Spinner, useToast } from '@chakra-ui/react'
import filter from 'lodash/filter'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [posts, authors, fetch, loading] = useAppStore(state => [
    state.posts,
    state.authors,
    state.fetch,
    state.loading
  ])
  const toast = useToast()

  useAsyncEffect(async () => {
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
      {loading ? (
        <Spinner />
      ) : (
        <BlogList
          page={1}
          posts={filter(posts, post => filterSearched(searchTerm, [post.title, post.body]))}
          authors={authors}
        />
      )}
    </>
  )
}
export default Home
