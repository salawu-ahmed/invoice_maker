import React from 'react'
import ThemeLink from './ThemeLink'
import heroImage from '../public/images/hero_image.webp'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='mt-16 bg-violet-600 grid grid-cols-1 lg:grid-cols-2 py-8 md:py-16 px-4 md:px-16 text-white items-center gap-4'>
        <div className="flex flex-col items-start space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
                Free Invoice Generator - Invoice Maker
            </h2>
            <p className='text-xl md:text-2xl'>Use Invoice Templates to Create Invoices Online
            Download, Print, Email Invoice with Invoice Generator</p>
            <ThemeLink href="/invoice" title="Create your first Invoice" className="bg-red-600 hover:bg-red-700 focus:ring-red-300"/>
        </div>
      <div>
        <Image src={heroImage} />
      </div>
    </div>
  )
}
