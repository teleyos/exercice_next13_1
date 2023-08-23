import { Post } from '@/types'
import { api } from '@/helpers/api'

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await api.get<Post[]>('/posts')
    return response.data
  } catch (e) {
    console.error("couldn't fetch posts :", e)
    throw e
  }
}
