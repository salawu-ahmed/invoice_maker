import Link from 'next/link'
import React from 'react'
import ThemeLink from './ThemeLink'
import { MdClose, MdOutlineMenu } from 'react-icons/md'

export default function Navbar() {
  return (
    <header className='bg-[#733dd9] fixed top-0 right-0 left-0 h-16 w-full flex items-center justify-between px-16 text-slate-50'>
      <Link href='/' className='font-bold text-slate-50 text-2xl md:text-4xl'>Invoicer</Link>
      <nav className='hidden md:flex items-center gap-3'>
        <Link href='/'>Features</Link>
        <Link href='/'>Pricing</Link>
        <Link href='/'>Free Tools</Link>
      </nav>
      <div className="hidden  md:flex items-center gap-4 ">
        <Link href='/login'>Login</Link>
        <ThemeLink className="bg-red-600 hover:bg-red-700 focus:ring-red-300" title="Register" href="/red" />
      </div>
      {/* <MdOutlineMenu size={30} className='md:hidden' onClick={handleClick}/> */}

      <div className='w-1/2 mx-auto md:hidden absolute fixed top-0 right-0 h-screen flex flex-col bg-black p-6'>
        <div className='flex w-full justify-between items-center mb-8 '>
          <Link href='/' className='font-bold text-slate-50 text-4xl md:text-4xl'>Invoicer</Link>
          <MdClose size={40} />
        </div>
        <nav className='flex flex-col'>
          <Link href='/' className='text-2xl py-3'>Features</Link>
          <Link href='/' className='text-2xl py-3'>Pricing</Link>
          <Link href='/' className='text-2xl py-3'>Free Tools</Link>
          <Link href='/' className='text-2xl py-3'>Login</Link>
          <Link href='/' className='text-2xl py-3'>Register</Link>
        </nav>
      </div>
    </header>
  )
}
