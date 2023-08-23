'use client'

import { NavBar } from '@/app/_components/NavBar'
import { combineProviders } from '@/helpers/utils'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Container, VStack } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const Providers = combineProviders([CacheProvider, ChakraProvider])

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en' className={poppins.className}>
    <head>
      <title>Owo</title>
    </head>
    <body suppressHydrationWarning>
      <Providers>
        <Container maxW='container.sm' centerContent>
          <VStack w='full'>
            <NavBar />
            {children}
          </VStack>
        </Container>
      </Providers>
    </body>
  </html>
)
export default RootLayout
