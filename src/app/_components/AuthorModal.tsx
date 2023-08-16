import { User } from '@/types'
import { AtSignIcon, EmailIcon, InfoIcon, PhoneIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/next-js'
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

interface Props {
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
          <Flex w='full' justifyContent='left' alignItems='center'>
            <PhoneIcon mr='8px' />
            <Text>{author.phone}</Text>
          </Flex>
          <Flex w='full' justifyContent='left' alignItems='center'>
            <AtSignIcon mr='8px' />
            <Text>{author.website}</Text>
          </Flex>
          <Flex w='full' justifyContent='left' alignItems='center'>
            <EmailIcon mr='8px' />
            <Text>{author.email}</Text>
          </Flex>
          <Flex w='full' justifyContent='left' alignItems='center'>
            <InfoIcon mr='8px' />
            <Text>
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
