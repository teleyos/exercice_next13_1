'use client'
import { AuthorCard } from '@/app/_components/AuthorCard'
import SearchBar, { filterSearched } from '@/app/_components/SearchBar'
import errorToast from '@/helpers/errors'
import { useAppStore } from '@/helpers/store'
import { Heading, Spinner, useToast, VStack } from '@chakra-ui/react'
import filter from 'lodash/filter'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import { useEffect, useState } from 'react'
import useAsyncEffect from 'use-async-effect'

const Authors = () => {
  const authors = useAppStore(state => state.authors)
  const fetch = useAppStore(state => state.fetch)
  const [showing, setShowing] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const toast = useToast()

  useAsyncEffect(async () => {
    if (!isEmpty(authors)) return
    try {
      await fetch()
    } catch (e) {
      errorToast(toast, "Can't fetch data")
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
      <SearchBar setSearchTerm={setSearchTerm} value='Search authors' />
      <VStack spacing='16px' w='full'>
        {authors &&
          map(
            filter(authors, author => filterSearched(searchTerm, [author.name, author.username])),
            author => <AuthorCard key={author.id} author={author} />
          )}
      </VStack>
    </>
  )
}
export default Authors
