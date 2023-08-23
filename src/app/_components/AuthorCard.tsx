'use client'
import { AuthorModal } from '@/app/_components/AuthorModal'
import { User } from '@/types'
import { Card, CardHeader } from '@chakra-ui/card'
import { Box, Button, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md'

type Props = {
  author: User
}

export const AuthorCard = ({ author }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Card w='full'>
        <CardHeader p={4}>
          <Flex justifyContent='space-between'>
            <Box>
              <Heading size='md'>{author.name}</Heading>
              <Text>@{author.username}</Text>
            </Box>
            <Button onClick={onOpen}>
              <MdSearch />
            </Button>
          </Flex>
        </CardHeader>
      </Card>
      <AuthorModal author={author} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
