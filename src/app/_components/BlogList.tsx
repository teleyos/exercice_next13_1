'use client'

import PagePicker from '@/app/_components/PagePicker'
import PostCard from '@/app/_components/PostCard'
import { Post, User } from '@/types'
import { Spinner, Text, VStack } from '@chakra-ui/react'
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
    const pageFloor = Math.floor(posts.length / POST_PER_PAGE)

    return (
      posts.length > POST_PER_PAGE && (
        <PagePicker
          currentPage={currentPage}
          setPage={setPage}
          numberPage={pageFloor + (pageFloor != posts.length / POST_PER_PAGE ? 1 : 0)}
        />
      )
    )
  }

  return (
    <>
      <MyPagePicker />
      {posts.length > 0 ? (
        <VStack>
          {posts.slice((currentPage - 1) * POST_PER_PAGE, currentPage * POST_PER_PAGE).map(post => (
            <PostCard post={post} author={authors?.find(a => a.id == post.userId)} key={post.id} />
          ))}
        </VStack>
      ) : (
        <Text>No posts found with these filter</Text>
      )}
      <MyPagePicker />
    </>
  )
}

export default BlogList
