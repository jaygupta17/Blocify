import React from 'react'
import { ModeToggle } from '../toggle'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from "../ui/button"
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../public/logo.png";
import HoverBorderGradientDemo from '../../components/Buttonss';

const Header = () => {
    return (
        <div className='flex flex-center-between w-screen h-[15vh] bg-black'>
            <div className="container flex flex-center-between h-16 max-w-screen-2xl items-center">
            <div className="font-extrabold flex gap-3 justify-center items-center">
                <Image src={Logo} alt='logo' height={50} width={50}></Image>
                <h6 className='text-2xl'>Blockify</h6>
            </div>
         <div className="flex gap-10">
          <div className="lg:flex md:hidden gap-8 ">
          </div>
         </div>
            <div className='flex-center gap-4 mr-14'>
                <ModeToggle />
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn >
                    <Link href="/profile">
                        <Button className='flex-center'>
                                Profile
                        </Button>
                    </Link>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </div>
    )
}

export default Header;
