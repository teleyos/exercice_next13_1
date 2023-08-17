'use client'

import { useAppStore } from '@/helpers/store'
import { Link } from '@chakra-ui/next-js'
import { Button, HStack } from '@chakra-ui/react'

export const NavBar = () => {
  const reset = useAppStore(state => state.reset)
  const fetch = useAppStore(state => state.fetch)

  return (
    <HStack>
      <Link href='/'>
        <Button>Posts List</Button>
      </Link>
      <Link href='/authors'>
        <Button>Author List</Button>
      </Link>
      <Button
        onClick={async () => {
          reset()
          await fetch()
        }}>
        Reset App
      </Button>
    </HStack>
  )
}
