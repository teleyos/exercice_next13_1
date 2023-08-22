'use client'
import BlogList from '@/app/_components/BlogList'
import SearchBar, { filterSearched } from '@/app/_components/SearchBar'
import errorToast from '@/helpers/errors'
import { useAppStore } from '@/helpers/store'
import { User } from '@/types'
import { Heading, useToast } from '@chakra-ui/react'
import filter from 'lodash/filter'
import head from 'lodash/head'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import parseInt from 'lodash/parseInt'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'
import { shallow } from 'zustand/shallow'

const Author = ({ params }: { params: { id: string } }) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentAuthor, setCurrentAuthor] = useState<User>()
  const [posts, authors, fetch] = useAppStore(
    state => [state.posts, state.authors, state.fetch],
    shallow
  )
  const toast = useToast()

  useAsyncEffect(async () => {
    try {
      if (isEmpty(posts)) await fetch()
    } catch (e) {
      errorToast(toast, "Can't fetch data")
    }
    setCurrentAuthor(head(filter(authors, author => isEqual(author.id, parseInt(params.id)))))
  }, [])

  return (
    <>
      <Heading>Blog Posts from {currentAuthor?.name ?? '...'}</Heading>
      <SearchBar setSearchTerm={setSearchTerm} value='Search posts' />
      {posts && currentAuthor && (
        <BlogList
          page={1}
          posts={filter(
            posts,
            post =>
              isEqual(post.userId, parseInt(params.id)) &&
              filterSearched(searchTerm, [post.body, post.title])
          )}
        />
      )}
    </>
  )
}
export default Author
