import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'
import { MdSearch } from 'react-icons/md'

type Props = {
  setSearchTerm: Dispatch<SetStateAction<string>>
  value: string
}

const SearchBar = ({ setSearchTerm, value }: Props) => (
  <InputGroup w='full'>
    <InputLeftElement>
      <MdSearch color='#708095' />
    </InputLeftElement>
    <Input
      placeholder={value}
      variant='filled'
      onChange={event => {
        setSearchTerm(event.target.value)
      }}
      pb='3px'
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
