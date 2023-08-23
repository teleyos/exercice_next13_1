'use client'
import { Button, HStack, Text } from '@chakra-ui/react'
import isEqual from 'lodash/isEqual'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  currentPageIndex: number
  setPage: Dispatch<SetStateAction<number>>
  lastPageIndex: number
}

const PagePicker = ({ currentPageIndex, setPage, lastPageIndex }: Props) => {
  return (
    <HStack>
      <Button onClick={() => setPage(1)}>&lt;&lt;</Button>

      <Button
        onClick={() =>
          setPage(isEqual(currentPageIndex, 1) ? lastPageIndex : currentPageIndex - 1)
        }>
        &lt;
      </Button>

      <Text>
        {currentPageIndex}/{lastPageIndex}
      </Text>

      <Button onClick={() => setPage((currentPageIndex % lastPageIndex) + 1)}>&gt;</Button>

      <Button onClick={() => setPage(lastPageIndex)}>&gt;&gt;</Button>
    </HStack>
  )
}

export { PagePicker }
