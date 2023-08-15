import { User } from '@/types'
import api from '@/helpers/api'

export const getAuthors = async (): Promise<User[]> => {
  try {
    const response = await api.get<User[]>('/users')
    return response.data
  } catch (e) {
    console.error("couldn't fetch authors :", e)
    throw e
  }
}
