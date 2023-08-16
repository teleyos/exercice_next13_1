'use client'

import { Link } from '@chakra-ui/next-js'
import { Button, HStack } from '@chakra-ui/react'

export const NavBar = () => (
  <HStack>
    <Link href='/'>
      <Button>Posts List</Button>
    </Link>
    <Link href='/authors'>
      <Button>Author List</Button>
    </Link>
  </HStack>
)
