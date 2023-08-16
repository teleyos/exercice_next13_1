'use client'

import { NavBar } from '@/app/_components/NavBar'
import { Providers } from '@/app/providers'
import { Center, Container, VStack } from '@chakra-ui/react'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en' className={poppins.className}>
    <body>
      <Providers>
        <Container>
          <Center>
            <VStack>
              <NavBar />
              {children}
            </VStack>
          </Center>
        </Container>
      </Providers>
    </body>
  </html>
)
export default RootLayout
