'use client'

import AuthorModal from '@/app/_components/AuthorModal'
import { useAppStore } from '@/helpers/store'
import { Post, User } from '@/types'
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card'
import { Button, Heading, Text, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  post: Post
  author?: User
}

const PostCard = ({ post, author }: Props) => {
  const deletePost = useAppStore(state => state.deletePost)
  const editTitle = useAppStore(state => state.editTitle)
  const editBody = useAppStore(state => state.editBody)
  const [newTitle, setNewTitle] = useState<string>(post.title)
  const [newBody, setNewBody] = useState<string>(post.body)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Card w='100%' p='16px' borderStyle='solid' borderWidth='1px' borderColor='black'>
      <CardHeader p='8px'>
        <Heading size='sm' m='0px' p='0px'>
          {post.id} -{' '}
          <Text
            as='span'
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={e => {
              const elem = e.target as HTMLElement
              setNewTitle(elem.innerText)
            }}
            onBlur={() => {
              editTitle(post.id, newTitle)
            }}>
            {post.title}
          </Text>
        </Heading>
        <Text mt="8px" color='blueviolet' onClick={onOpen} cursor='pointer'>
          {author?.name}
        </Text>
        {author && <AuthorModal author={author} isOpen={isOpen} onClose={onClose} />}
      </CardHeader>
      <CardBody p='8px'>
        <Text
          mt='0px'
          mb='0px'
          p='0px'
          contentEditable={true}
          suppressContentEditableWarning={true}
          onInput={e => {
            const elem = e.target as HTMLElement
            setNewBody(elem.innerText)
          }}
          onBlur={() => editBody(post.id, newBody)}>
          {post.body}
        </Text>
      </CardBody>
      <CardFooter>
        <Button onClick={() => deletePost(post.id)}>Delete Post</Button>
      </CardFooter>
    </Card>
  )
}

export default PostCard
