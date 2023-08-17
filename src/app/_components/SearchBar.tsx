import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import includes from 'lodash/includes'
import lowerCase from 'lodash/lowerCase'
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

export const filterSearched = (searchTerm: string, paramsToCheck: string[]) => {
  for (let param of paramsToCheck) {
    if (includes(lowerCase(param), lowerCase(searchTerm))) return true
  }
  return false
}
