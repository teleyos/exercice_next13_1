import { Box, Button, Flex } from '@kuma-ui/core'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  currentPage: number
  setPage: Dispatch<SetStateAction<number>>
  numberPage: number
}

const PagePicker = ({ currentPage, setPage, numberPage }: Props) => (
  <Flex flexDirection='row' justify='space-evenly' alignItems='center' unselectable='on'>
    <Button bgColor='white' onClick={() => setPage(1)}>
      {'<<'}
    </Button>

    <Button onClick={() => setPage(((currentPage + numberPage + 2) % numberPage) + 1)}>
      {'<'}
    </Button>

    <Box>
      {currentPage}/{numberPage}
    </Box>

    <Button onClick={() => setPage((currentPage % numberPage) + 1)}>{'>'}</Button>

    <Button onClick={() => setPage(numberPage)}>{'>>'}</Button>
  </Flex>
)

export default PagePicker
