'use client'
import PagePicker from '@/app/_components/PagePicker'
import PostCard from '@/app/_components/PostCard'
import { Post, User } from '@/types'
import { Box, VStack } from '@kuma-ui/core'
import { useState } from 'react'

interface Props {
  page: number
  posts: Post[]
  authors?: User[]
}

const POST_PER_PAGE = 25 as const

const BlogList = ({ page, posts, authors }: Props) => {
  const [currentPage, setPage] = useState(page)

  const MyPagePicker = () =>
    posts.length > POST_PER_PAGE && (
      <PagePicker
        currentPage={currentPage}
        setPage={setPage}
        numberPage={posts.length / POST_PER_PAGE}
      />
    )

  return (
    <>
      <MyPagePicker />
      <VStack>
        {posts.slice((currentPage - 1) * POST_PER_PAGE, currentPage * POST_PER_PAGE).map(post => (
          <Box key={post.id} width='full'>
            <PostCard post={post} author={authors?.find(a => a.id == post.userId)} />
          </Box>
        ))}
      </VStack>
      <MyPagePicker />
    </>
  )
}

export default BlogList
