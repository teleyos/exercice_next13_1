'use client'
import { AuthorCard } from '@/app/_components/AuthorCard'
import { filterSearched, SearchBar } from '@/app/_components/SearchBar'
import { errorToast } from '@/helpers/errors'
import { useAppStore } from '@/helpers/store'
import { Heading, useToast, VStack } from '@chakra-ui/react'
import filter from 'lodash/filter'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import { Children, useState } from 'react'
import useAsyncEffect from 'use-async-effect'

const Authors = () => {
  const [authors, fetch] = useAppStore(state => [state.authors, state.fetch])
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

  return (
    <>
      <Heading>Author List</Heading>
      <SearchBar setSearchTerm={setSearchTerm} value='Search authors' />
      <VStack spacing={4} w='full'>
        {Children.toArray(
          map(
            filter(authors, author => filterSearched(searchTerm, [author.name, author.username])),
            author => <AuthorCard author={author} />
          )
        )}
      </VStack>
    </>
  )
}
export default Authors
