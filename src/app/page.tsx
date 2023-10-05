'use client'
import {} from "crypto-js"
import {ReactNode} from "react";
export default function Main({children}: { children: ReactNode }) {

    return (<div className={"h-max light"}>
            {children}
        </div>
    )
}
