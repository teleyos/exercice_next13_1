import { Flex, Link } from '@kuma-ui/core'

export const NavBar = () => (
  <Flex justify='space-between'>
    <Link href='/'>Posts List</Link>
    <Link href='/authors'>Author List</Link>
  </Flex>
)
