import {KumaRegistry} from "@kuma-ui/next-plugin/registry"
import {Poppins} from "next/font/google";
import {Flex} from "@kuma-ui/core";

// @ts-ignore
const poppins = Poppins({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang={"en"} className={poppins.className}>
        <body>
        <KumaRegistry>
            <Flex flexDir={"column"} justify={"center"} className={"main_container"} paddingX={[0, 0, 64, 128, 256]}>
                {children}
            </Flex>
        </KumaRegistry>
        </body>
        </html>
    );
}
