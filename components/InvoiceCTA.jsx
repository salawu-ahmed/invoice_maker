import React from 'react'
import InvoiceImage from '../public/images/invoice_template.jpg'
import Image from 'next/image'
import ThemeLink from './ThemeLink'

export default function InvoiceCTA() {
  return (
    <div className="invoice_cta bg-slate-50 flex items-center justify-center" id='invoice_generator'>
      <div className="py-16 px-20 bg-slate-50 bg-opacity-50 bg-white shadow-2xl rounded-md">
        <ThemeLink title="Create your first invoice" className="bg-red-600 hover:bg-red-700" href="/new" />
      </div>
    </div>
  )
}
