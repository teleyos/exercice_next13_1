import { Post, User } from '@/types'
import { Box, Link, Text } from '@kuma-ui/core'

interface Props {
  post: Post
  author?: User
}

const PostCard = ({ post, author }: Props) => (
  <Box borderWidth='1px' borderStyle='solid' p={8} m={8}>
    <Text fontSize='16px' fontWeight='bold' m={0}>
      {post.id} - {post.title}
    </Text>
    <Link m={0} color='blueviolet' href={`/authors/${author?.id}`}>
      {author?.name}
    </Link>

    <Box>{post.body.substring(0, 45) + '...'}</Box>
  </Box>
)

export default PostCard
