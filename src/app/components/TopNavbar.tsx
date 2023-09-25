'use client'

import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
// import NextLogo from "public/next-logo.svg";

const TopNavbar = () => {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">VCNFT Car Registry</p>
            </NavbarBrand>
            {/*<NavbarContent className="hidden sm:flex gap-4" justify="center">*/}
            {/*    <NavbarItem>*/}
            {/*        <Link color="foreground" href="#">*/}
            {/*            Features*/}
            {/*        </Link>*/}
            {/*    </NavbarItem>*/}
            {/*    <NavbarItem isActive>*/}
            {/*        <Link href="#" aria-current="page">*/}
            {/*            Customers*/}
            {/*        </Link>*/}
            {/*    </NavbarItem>*/}
            {/*    <NavbarItem>*/}
            {/*        <Link color="foreground" href="#">*/}
            {/*            Integrations*/}
            {/*        </Link>*/}
            {/*    </NavbarItem>*/}
            {/*</NavbarContent>*/}
            <NavbarContent justify="end">
                {/*<NavbarItem className="hidden lg:flex">*/}
                {/*    <Link href="#">Login</Link>*/}
                {/*</NavbarItem>*/}
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Go to Wallet
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
};

export default TopNavbar;