'use client'
import BlogList from '@/app/_components/BlogList'
import SearchBar, { filterSearched } from '@/app/_components/SearchBar'
import { useAppStore } from '@/helpers/store'
import { User } from '@/types'
import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'

export default function Author({ params }: { params: { id: string } }) {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentAuthor, setCurrentAuthor] = useState<User>()
  const posts = useAppStore(state => state.posts)
  const authors = useAppStore(state => state.authors)
  const fetch = useAppStore(state => state.fetch)

  useAsyncEffect(async () => {
    try {
      if (posts.length == 0) fetch()
    } catch (e) {
      throw e
    }
    setCurrentAuthor(authors.filter(author => author.id == parseInt(params.id))[0])
  }, [])
  return (
    <>
      <Heading>Blog Posts from {currentAuthor?.name ?? '...'}</Heading>
      <SearchBar setSearchTerm={setSearchTerm} value='Search posts' />
      {posts && currentAuthor && (
        <BlogList
          page={1}
          posts={posts
            .filter(post => post.userId == parseInt(params.id))
            .filter(post => filterSearched({ searchTerm, paramsToCheck: [post.body, post.title] }))}
        />
      )}
    </>
  )
}
