'use client'

import { useAppStore } from '@/helpers/store'
import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { IoChevronDown } from 'react-icons/io5'

export const NavBar = () => {
  const [reset, fetch] = useAppStore(state => [state.reset, state.fetch])

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link href='/'>Posts List</Link>
        </MenuItem>
        <MenuItem>
          <Link href='/authors'>Author List</Link>
        </MenuItem>
        <MenuItem>
          <Text
            onClick={async () => {
              reset()
              await fetch()
            }}>
            Reset App
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
