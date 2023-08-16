'use client'

import { getAuthors } from '@/app/_api/(authors)/getAuthors'
import { User } from '@/types'
import { Link } from '@chakra-ui/next-js'
import { Heading, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'

const Authors = () => {
  const [authors, setAuthors] = useState<User[]>()
  useAsyncEffect(async () => {
    try {
      const authors = await getAuthors()
      setAuthors(authors)
    } catch (e) {
      console.error("couldn't fetch authors :", e)
      throw e
    }
  }, [])

  return (
    <>
      <Heading>Author List</Heading>
      <VStack>
        {authors &&
          authors.map(a => (
            <Link key={a.id} href={`/authors/${a.id}`}>
              {a.name}
            </Link>
          ))}
      </VStack>
    </>
  )
}
export default Authors
