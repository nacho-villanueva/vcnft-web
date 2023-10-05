'use client'

import {PropsWithChildren} from "react";
import {NextUIProvider} from "@nextui-org/react";
import {DIDContextProvider} from "@/hooks/UseDID";

const MainProviders = ({children}: PropsWithChildren<{}>) => {
    return (
        <NextUIProvider>
            <DIDContextProvider>
                {children}
            </DIDContextProvider>
        </NextUIProvider>
    )
}

export default MainProviders;