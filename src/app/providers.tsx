'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => (
  <CacheProvider>
    <ChakraProvider>{children}</ChakraProvider>
  </CacheProvider>
)
