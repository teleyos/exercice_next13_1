import { getAuthors } from '@/app/_api/(authors)/getAuthors'
import { getPosts } from '@/app/_api/getPosts'
import BlogList from '@/app/_components/BlogList'
import { Post, User } from '@/types'
import { Spacer, Text } from '@kuma-ui/core'

export default async function Home() {
  const posts = (await getPosts()) as Post[]
  const authors = (await getAuthors()) as User[]

  return (
    <>
      <Text fontSize='16px' textAlign='center'>
        Blog Posts
      </Text>
      <Spacer size='16px' />
      <BlogList page={1} posts={posts} authors={authors} />
    </>
  )
}
