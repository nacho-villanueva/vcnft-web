'use client'

import {PropsWithChildren} from "react";
import {NextUIProvider} from "@nextui-org/react";

const MainProviders = ({children}: PropsWithChildren<{}>) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default MainProviders;