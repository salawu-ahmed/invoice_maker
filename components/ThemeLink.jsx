import Link from 'next/link'
import React from 'react'

export default function ThemeLink({ title, href, className }) {
  return (
    <Link href={href} className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-8 py-2.5 text-center ${className}`}>
      {title}
    </Link>
  )
}
