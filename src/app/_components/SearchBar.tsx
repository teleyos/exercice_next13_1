'use client'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import includes from 'lodash/includes'
import lowerCase from 'lodash/lowerCase'
import some from 'lodash/some'
import { MdSearch } from 'react-icons/md'

type Props = {
  setSearchTerm: (searchTerm: string) => void
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
      pb={0.5}
    />
  </InputGroup>
)

const filterSearched = (searchTerm: string, paramsToCheck: string[]) => {
  return some(paramsToCheck, param => includes(lowerCase(param), lowerCase(searchTerm)))
}

export { SearchBar, filterSearched }
