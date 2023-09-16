import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React, {PropsWithChildren} from "react";
import MainProviders from "@/app/providers";
import TopNavbar from "@/app/components/TopNavbar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'VCNFT',
    description: 'VCNFT Demo',
}

export default function RootLayout({children}: PropsWithChildren<{}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <MainProviders>
            <div className={"h-screen flex flex-col"}>
                <TopNavbar/>
                <main className={"flex-1"}>
                    {children}
                </main>
                <footer>
                    Footer
                </footer>
            </div>
        </MainProviders>
        </body>
        </html>
    )
}


