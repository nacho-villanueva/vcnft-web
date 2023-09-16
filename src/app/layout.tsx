import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React, {PropsWithChildren} from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'VCNFT',
    description: 'VCNFT Demo',
}

export default function RootLayout({children}: PropsWithChildren<{}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {/*<MainProviders>*/}
            {children}
        {/*</MainProviders>*/}
        </body>
        </html>
    )
}


