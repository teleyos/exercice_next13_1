import { getAuthors } from '@/app/_api/(authors)/getAuthors'
import { Link, Text } from '@kuma-ui/core'

export default async function Authors() {
  const authors = await getAuthors()
  return (
    <>
      <Text fontSize='16px' textAlign='center'>
        Author List
      </Text>
      {authors.map(a => (
        <Link key={a.id} href={`/authors/${a.id}`}>
          {a.name}
        </Link>
      ))}
    </>
  )
}
