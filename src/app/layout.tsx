'use client'

import { NavBar } from '@/app/_components/NavBar'
import { Providers } from '@/app/providers'
import { Container, VStack } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en' className={poppins.className}>
    <head>
      <title>Owo</title>
    </head>
    <body>
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
