'use client'

import { Button, HStack, Text } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  currentPage: number
  setPage: Dispatch<SetStateAction<number>>
  numberPage: number
}

const PagePicker = ({ currentPage, setPage, numberPage }: Props) => (
  <HStack>
    <Button onClick={() => setPage(1)}>{'<<'}</Button>

    <Button onClick={() => setPage(currentPage == 1 ? numberPage : currentPage - 1)}>{'<'}</Button>

    <Text>
      {currentPage}/{numberPage}
    </Text>

    <Button onClick={() => setPage((currentPage % numberPage) + 1)}>{'>'}</Button>

    <Button onClick={() => setPage(numberPage)}>{'>>'}</Button>
  </HStack>
)

export default PagePicker
