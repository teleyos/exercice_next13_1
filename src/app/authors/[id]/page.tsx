import { getAuthor } from '@/app/_api/(authors)/getAuthor'
import { getPosts } from '@/app/_api/getPosts'
import BlogList from '@/app/_components/BlogList'
import { Spacer, Text } from '@kuma-ui/core'

export default async function Author({ params }: { params: { id: string } }) {
  const posts = await getPosts()
  const author = await getAuthor(parseInt(params.id))

  return (
    <>
      <Text fontSize='16px' textAlign='center'>
        Blog Posts from {author.name}
      </Text>
      <Spacer size='16px' />
      <BlogList page={1} posts={posts.filter(p => p.userId == author.id)} />
    </>
  )
}
