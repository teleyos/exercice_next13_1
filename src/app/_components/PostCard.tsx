'use client'

import { AuthorModal } from '@/app/_components/AuthorModal'
import { EditableControls } from '@/app/_components/EditableControls'
import { useAppStore } from '@/helpers/store'
import { Post, User } from '@/types'
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card'
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Heading,
  HStack,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react'

type Props = {
  post: Post
  author?: User
}

const PostCard = ({ post, author }: Props) => {
  const [deletePost, editTitle, editBody] = useAppStore(state => [
    state.deletePost,
    state.editTitle,
    state.editBody
  ])
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Card w='full' p={2} borderStyle='solid' borderWidth='1px' borderColor='black'>
      <CardHeader p={2}>
        <Heading size='sm' m={0} p={0}>
          <Editable
            textAlign='start'
            defaultValue={post.title}
            isPreviewFocusable={false}
            onSubmit={value => editTitle(post.id, value)}>
            <HStack w='full' justifyContent='space-between'>
              <EditablePreview as='span' />
              <Input as={EditableInput} />
              <EditableControls />
            </HStack>
          </Editable>
        </Heading>
        <Text mt={2} color='blueviolet' onClick={onOpen} cursor='pointer'>
          {author?.name}
        </Text>
        {author && <AuthorModal author={author} isOpen={isOpen} onClose={onClose} />}
      </CardHeader>
      <CardBody p={2}>
        <Editable
          textAlign='start'
          defaultValue={post.body}
          isPreviewFocusable={false}
          onSubmit={value => editBody(post.id, value)}>
          <HStack w='full' justifyContent='space-between'>
            <EditablePreview as='span' />
            <Input as={EditableInput} />
            <EditableControls />
          </HStack>
        </Editable>
      </CardBody>
      <CardFooter>
        <Button onClick={() => deletePost(post.id)}>Delete Post</Button>
      </CardFooter>
    </Card>
  )
}

export { PostCard }
