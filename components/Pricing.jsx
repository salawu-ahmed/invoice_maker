import Link from 'next/link'
import React from 'react'
import ThemeLink from './ThemeLink'
import Icons from './Icons'

export default function Pricing() {
    return (
        <div className='bg-slate-100 text-black py-8 md:py-16 px-4 md:px-16 flex flex-col items-start justify-start md:items-center md:justify-center'>
            <h2 className='text-2xl md:text-4xl font-semibold mb-4 text-center px-4'>Pricing of Invoice Generator</h2>
            <h3 className='text-xl mb-12 text-center'>Only pay when you need premium features</h3>
            <div className="flex flex-col md:flex-row space-between gap-6">
                <div className='shadow-2xl rounded-lg p-8 bg-white'>
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <Icons.FiCheckCircle size={35} className='backdrop-blur-2xl text-[#733dd9]' />
                    </div>
                    <h3 className='text-xl font-bold mb-6'>Free Plan</h3>
                    <p className='mb-6'>All of our premium features are available on a free trial. Experience what all Refrens has to offer without making any payment!</p>
                    <Link href='/' className='text-[#733dd9] font-bold'>Create Free Invoice</Link>
                </div>
                <div className='shadow-2xl rounded-lg p-8 bg-white'>
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                        <Icons.SlDiamond size={35} className='backdrop-blur-2xl text-[#733dd9]' />
                    </div>
                    <h3 className='text-xl font-bold mb-6'>Premium Plan</h3>
                    <p className='mb-6'>Manage your accounting at faster pace with additional premium features at minimal cost.</p>
                    <Link href='/nljn' className='text-[#733dd9] font-bold'>Explore Premium Features</Link>
                </div>
            </div>
        </div>
    )
}
