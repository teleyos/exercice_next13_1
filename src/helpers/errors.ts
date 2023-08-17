import { CreateToastFnReturn } from '@chakra-ui/react'

const errorToast = (toast: CreateToastFnReturn, message: string) =>
  toast({
    title: 'Error',
    description: message,
    status: 'error',
    duration: 5000,
    isClosable: true
  })

export default errorToast
