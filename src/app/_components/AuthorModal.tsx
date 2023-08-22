'use client'

import { User } from '@/types'
import {
  Button,
  Center,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import { IoMdGlobe, IoMdPin } from 'react-icons/io'
import { MdEmail, MdPhone } from 'react-icons/md'

type Props = {
  author: User
  isOpen: boolean
  onClose: () => void
}

const AuthorModal = ({ author, isOpen, onClose }: Props) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>
        <Heading>{author.name}</Heading>
        <Text>@{author.username}</Text>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <VStack>
          <Flex w='full' justifyContent='start' alignItems='center'>
            <MdPhone />
            <Text ml={2}>{author.phone}</Text>
          </Flex>
          <Flex w='full' justifyContent='start' alignItems='center'>
            <IoMdGlobe />
            <Text ml={2}>{author.website}</Text>
          </Flex>
          <Flex w='full' justifyContent='start' alignItems='center'>
            <MdEmail />
            <Text ml={2}>{author.email}</Text>
          </Flex>
          <Flex w='full' justifyContent='start' alignItems='center'>
            <IoMdPin />
            <Text ml={2}>
              {author.address.suite} {author.address.street}, {author.address.zipcode}{' '}
              {author.address.city}
            </Text>
          </Flex>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Center w='full'>
          <Link href={`/authors/${author.id}`}>
            <Button>See articles</Button>
          </Link>
        </Center>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export default AuthorModal
