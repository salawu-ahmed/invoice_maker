import Link from 'next/link'
import React from 'react'
import ThemeLink from './ThemeLink'

export default function Navbar() {
  return (
    <header className='bg-violet-600 fixed top-0 right-0 left-0 h-16 w-full flex items-center justify-between px-16 text-slate-50'>
        <Link href='/' className='font-bold text-slate-50 text-2xl md:text-4xl'>Invoicer</Link>
        <nav className='flex items-center gap-3'>
        <Link href='/'>Features</Link>
        <Link href='/'>Pricing</Link>
        <Link href='/'>Free Tools</Link>
        </nav>
        <div className="flex items-center gap-4">
            <Link href='/login'>Login</Link>
            <ThemeLink className="bg-red-600 hover:bg-red-700 focus:ring-red-300" title="Register" href="/red"/> 
        </div>
    </header>
  )
}
