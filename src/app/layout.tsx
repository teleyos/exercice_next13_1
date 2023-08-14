import {KumaRegistry} from "@kuma-ui/next-plugin/registry"
import {Poppins} from "next/font/google";

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
        <KumaRegistry>{children}</KumaRegistry>
        </body>
        </html>
    );
}
