'use client'
import { AuthorCard } from '@/app/_components/AuthorCard'
import SearchBar, { filterSearched } from '@/app/_components/SearchBar'
import { useAppStore } from '@/helpers/store'
import { Heading, Spinner, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import useAsyncEffect from 'use-async-effect'

const Authors = () => {
  const authors = useAppStore(state => state.authors)
  const posts = useAppStore(state => state.posts)
  const fetch = useAppStore(state => state.fetch)
  const [showing, setShowing] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useAsyncEffect(async () => {
    if (authors.length != 0) return
    try {
      await fetch()
    } catch (e) {
      console.error("couldn't fetch authors :", e)
      throw e
    }
  }, [])

  useEffect(() => {
    setShowing(true)
  }, [])

  if (!showing) {
    return <Spinner thickness='4px' speed='0.2s' emptyColor='gray.100' color='blue.400' size='xl' />
  }

  return (
    <>
      <Heading>Author List</Heading>
      <SearchBar setSearchTerm={setSearchTerm} value="Search authors" />
      <VStack spacing='16px' w='full'>
        {authors &&
          authors
            .filter(author =>
              filterSearched({ paramsToCheck: [author.name, author.username], searchTerm })
            )
            .map(author => <AuthorCard key={author.id} author={author} />)}
      </VStack>
    </>
  )
}
export default Authors
