import { User } from '@/types'
import api from '@/helpers/api'

export const getAuthor = async (id: number): Promise<User> => {
  try {
    const response = await api.get(`/users/${id}`)
    return response.data
  } catch (e) {
    console.error("couldn't fetch authors :", e)
    throw e
  }
}
