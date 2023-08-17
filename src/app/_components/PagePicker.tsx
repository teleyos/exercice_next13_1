'use client'

import { Button, HStack, Text } from '@chakra-ui/react'
import isEqual from 'lodash/isEqual'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  currentPageIndex: number
  setPage: Dispatch<SetStateAction<number>>
  lastPageIndex: number
}

const PagePicker = ({ currentPageIndex, setPage, lastPageIndex }: Props) => (
  <HStack>
    <Button onClick={() => setPage(1)}>{'<<'}</Button>

    <Button
      onClick={() => setPage(isEqual(currentPageIndex, 1) ? lastPageIndex : currentPageIndex - 1)}>
      {'<'}
    </Button>

    <Text>
      {currentPageIndex}/{lastPageIndex}
    </Text>

    <Button onClick={() => setPage((currentPageIndex % lastPageIndex) + 1)}>{'>'}</Button>

    <Button onClick={() => setPage(lastPageIndex)}>{'>>'}</Button>
  </HStack>
)

export default PagePicker
