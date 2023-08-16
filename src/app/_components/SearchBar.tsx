import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  setSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ setSearchTerm }: Props) => (
  <InputGroup w='full'>
    <InputLeftElement>
      <BsSearch color='gray' />
    </InputLeftElement>
    <Input
      placeholder='Search article'
      variant='filled'
      onChange={event => {
        setSearchTerm(event.target.value)
      }}
    />
  </InputGroup>
)

export default SearchBar

interface filterSearchedProps {
  searchTerm: string
  paramsToCheck: string[]
}

export const filterSearched = ({ searchTerm, paramsToCheck }: filterSearchedProps) => {
  for (let param of paramsToCheck) {
    if (param.includes(searchTerm)) return true
  }
  return false
}
