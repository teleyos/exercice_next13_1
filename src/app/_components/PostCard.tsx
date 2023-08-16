'use client'

import { Post, User } from '@/types'
import { Card, CardBody, CardHeader } from '@chakra-ui/card'
import { Link } from '@chakra-ui/next-js'
import { Heading, Text } from '@chakra-ui/react'

interface Props {
  post: Post
  author?: User
}

const PostCard = ({ post, author }: Props) => (
  <Card w='100%' p='16px' borderStyle='solid' borderWidth='1px' borderColor='black'>
    <CardHeader p='8px'>
      <Heading size='sm' m='0px' p='0px'>
        {post.id} - {post.title}
      </Heading>
      <Link m={0} color='blueviolet' href={`/authors/${author?.id}`}>
        <Text m='0px' p='0px'>
          {author?.name}
        </Text>
      </Link>
    </CardHeader>
    <CardBody p='8px'>
      <Text mt='0px' mb='0px' p='0px'>
        {post.body}
      </Text>
    </CardBody>
  </Card>
)

export default PostCard
