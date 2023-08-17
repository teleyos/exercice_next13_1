'use client'

import PagePicker from '@/app/_components/PagePicker'
import PostCard from '@/app/_components/PostCard'
import { Post, User } from '@/types'
import { Spinner, Text, VStack } from '@chakra-ui/react'
import find from 'lodash/find'
import floor from 'lodash/floor'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import map from 'lodash/map'
import size from 'lodash/size'
import slice from 'lodash/slice'
import { useEffect, useState } from 'react'

type Props = {
  page: number
  posts: Post[]
  authors?: User[]
}

const POST_PER_PAGE = 25 as const

const BlogList = ({ page, posts, authors }: Props) => {
  const [currentPage, setPage] = useState(page)
  const [showing, setShowing] = useState(false)

  useEffect(() => {
    setShowing(true)
  }, [])

  if (!showing) {
    return <Spinner thickness='4px' speed='0.2s' emptyColor='gray.100' color='blue.400' size='xl' />
  }

  const MyPagePicker = () => {
    const numberPage = size(posts) / POST_PER_PAGE

    return (
      size(posts) > POST_PER_PAGE && (
        <PagePicker
          currentPageIndex={currentPage}
          setPage={setPage}
          lastPageIndex={floor(numberPage) + (!isEqual(numberPage, floor(numberPage)) ? 1 : 0)}
        />
      )
    )
  }

  return (
    <>
      <MyPagePicker />
      {!isEmpty(posts) ? (
        <VStack>
          {map(
            slice(posts, (currentPage - 1) * POST_PER_PAGE, currentPage * POST_PER_PAGE),
            post => (
              <PostCard
                post={post}
                author={find(authors, author => isEqual(author.id, post.userId))}
                key={post.id}
              />
            )
          )}
        </VStack>
      ) : (
        <Text>No posts found with these filter</Text>
      )}
      <MyPagePicker />
    </>
  )
}

export default BlogList
