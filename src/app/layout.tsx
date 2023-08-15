import { NavBar } from '@/app/_components/NavBar'
import { Flex } from '@kuma-ui/core'
import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={poppins.className}>
      <body>
        <KumaRegistry>
          <NavBar />
          <Flex
            flexDir='column'
            justify='center'
            className='main_container'
            paddingX={[0, 0, 64, 128, 256]}>
            {children}
          </Flex>
        </KumaRegistry>
      </body>
    </html>
  )
}
