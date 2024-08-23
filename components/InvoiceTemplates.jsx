import Image from 'next/image'
import React from 'react'
import BusinessInvoice from '../public/images/business_invoice_template.webp'
import LetterheadsInvoice from '../public/images/letterhead_invoice_template.webp'
import TaxInvoice from '../public/images/tax_invoice_template.webp'
import ModernInvoice from '../public/images/modern_invoice_template.webp'
import ProfessionalInvoice from '../public/images/professional_invoice_template.webp'
import PrintfriendlyInvoice from '../public/images/print-friendly_invoice_template.webp'
import Link from 'next/link'
import ThemeLink from './ThemeLink'


const str = "hello world"

export default function InvoiceTemplates() {
    const str = "Hello World!"
    const invoice_templates = [
        {
            id: 1,
            name: "Professional Invoice Template",
            src: ProfessionalInvoice
        },
        {
            id: 2,
            name: "Letterhead Invoice Template",
            src: LetterheadsInvoice
        },
        {
            id: 3,
            name: "Tax Invoice Template",
            src: TaxInvoice
        },
        {
            id: 4,
            name: "Print Invoice Template",
            src: PrintfriendlyInvoice
        },
        {
            id: 5,
            name: "Business Invoice Template",
            src: BusinessInvoice
        },
        {
            id: 6,
            name: "Modern Invoice Template",
            src: ModernInvoice
        },
    ]

    return (
        <div className='py-8 md:py-16 px-4 md:px-16 flex flex-col items-start justify-start md:items-center md:justify-center bg-slate-50 text-black'>
            <h2 className='text-2xl md:text-4xl font-semibold mb-4 text-center px-4'>Choose your favorite invoice <br /> template in step 3 with Invoicer</h2>
            <div className="grid grid-cols-3 gap-8 w-2/3">
                {
                    invoice_templates.map(({ id, name, src }) => {
                        return (
                            <Link href="/invoicegenerator" className='scroll-smooth' key={id}>
                                <div>
                                    <h3 className='mb-2 text-center'>{name}</h3>
                                    <div className='w-full border border-gray-200'>
                                        <Image src={src} className='border border-gray-200 w-full' />
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
