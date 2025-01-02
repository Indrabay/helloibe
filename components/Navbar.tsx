'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


export const NavbarHome = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="fixed top-0 left-0 z-30 w-full h-24 bg-green shadow-2xl">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src="/helloibe-logo.svg"
            alt="helloibe.me logo"
            width={180}
            height={20}
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li className="text-fontc">Setting</li>
          </ul>
        </div>
        <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25} color='#BFD7B7'/>
        </div>
        <div className={
          menuOpen
            ? 'fixed left-0 top-24 w-[40%] sm:hidden h-screen bg-green ease-in duration-500'
            : 'fixed left-[-100%] top-24 p-10 ease-in duration-500'
        }>
          <div onClick={handleNav} className='flex w-full items-center justify-end'>
            <AiOutlineClose size={25} color='#BFD7B7'/>
          </div>
          <div className="flex-col py-4 pl-4">
            <ul>
              <li className="text-fontc">Setting</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
