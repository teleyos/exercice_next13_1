import AuthorModal from '@/app/_components/AuthorModal'
import { User } from '@/types'
import { Card, CardHeader } from '@chakra-ui/card'
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface Props {
  author: User
}

export const AuthorCard = ({ author }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showing, setShowing] = useState(false)

  useEffect(() => {
    setShowing(true)
  }, [])

  if (!showing) {
    return null
  }

  return (
    <>
      <Card w='full'>
        <CardHeader p='16px'>
          <Flex justifyContent='space-between'>
            <Box>
              <Heading size='md'>{author.name}</Heading>
              <Text>@{author.username}</Text>
            </Box>
            <Button onClick={onOpen}>
              <SearchIcon />
            </Button>
          </Flex>
        </CardHeader>
      </Card>
      <AuthorModal author={author} isOpen={isOpen} onClose={onClose} />
    </>
  )
}