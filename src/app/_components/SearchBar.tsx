import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  setSearchTerm: Dispatch<SetStateAction<string>>
  value: string
}

const SearchBar = ({ setSearchTerm, value }: Props) => (
  <InputGroup w='full'>
    <InputLeftElement>
      <BsSearch color='gray' />
    </InputLeftElement>
    <Input
      placeholder={value}
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
    if (param.toLowerCase().includes(searchTerm.toLowerCase())) return true
  }
  return false
}
