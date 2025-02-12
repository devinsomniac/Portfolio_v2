import Image from 'next/image'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet"
import { Separator } from "@/Components/ui/separator"


import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <div>
            <nav className='px-2 flex justify-between items-center'>
                <Image src={'/portfolio_logo.png'} alt='logo' height={20} width={60} />
                <Sheet>
                    <SheetTrigger className='flex gap-2 justify-center items-center text-2xl'><GiHamburgerMenu/></SheetTrigger>
                    <SheetContent className='bg-white'>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <div>
                            <ul className='text-3xl'>
                                <li className='border-b'>About Me</li>
                                <li className='border-b'>Projects</li>
                                <li className='border-b'>Github</li>
                                <li className='border-b'>Contact Me</li>
                            </ul>
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </nav>
        </div>
    )
}

export default Navbar