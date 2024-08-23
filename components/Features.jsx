import Link from 'next/link';
import React from 'react'
import Icons from './Icons';
import ThemeLink from './ThemeLink';


export default function Features() {
    const features = [
        {
            id: 1,
            title: 'Create Invoices',
            Icon: Icons.LiaFileInvoiceDollarSolid,
            description: "Create professional invoices without any hassle of re-entering data the second time."
        },
        {
            id: 2,
            title: 'Invoice Templates',
            Icon: Icons.LiaFileInvoiceDollarSolid,
            description: "With a range of invoice designs, send personalized invoices to the clients that proclaim your brand."
        },
        {
            id: 3,
            title: 'Client Management',
            Icon: Icons.BsPeople,
            description: "Automatically track client-wise invoices, and payments, and maintain additional details."
        },
        {
            id: 4,
            title: 'Recurring Invoices',
            Icon: Icons.LiaFileInvoiceDollarSolid,
            description: "Create recurring invoices & never miss your payments. Perfect for billing weekly, monthly or yearly."
        },
        {
            id: 5,
            title: 'Insightful Reports',
            Icon: Icons.MdOutlineAnalytics,
            description: "Reports help you follow compliance and give insight into business performance."
        },
        {
            id: 6,
            title: 'Bulk Upload Invoices',
            Icon: Icons.RiFileUploadLine,
            description: "Streamline your invoicing process by uploading all of your invoices at once."
        },
        {
            id: 7,
            title: 'Send WhatsApp Reminder',
            Icon: Icons.PiWhatsappLogo,
            description: "Simple way to send your invoices via WhatsApp and schedule them for future use."
        },
        {
            id: 8,
            title: '24/7 Live Support',
            Icon: Icons.LiaFileInvoiceDollarSolid,
            description: "We are always available to support our customers via email support & live chat support."
        },
        {
            id: 9,
            title: 'Inventory Management',
            Icon: Icons.LiaFileInvoiceDollarSolid,
            description: "Easily add, manage, and track all the transactions associated with your stocks."
        },
        {
            id: 10,
            title: 'Roles & Permissions',
            Icon: Icons.LiaFileInvoiceDollarSolid,
            description: "Assign managerial roles, sales, and other permissions to your team members."
        },
        {
            id: 11,
            title: 'Customization of Columns',
            Icon: Icons.BsLayoutThreeColumns,
            description: "Customizable invoice template to add more relevant information and columns."
        },
        {
            id: 12,
            title: 'Email & Track Invoices',
            Icon: Icons.LiaFileInvoiceDollarSolid,
            description: "Send invoice via email and get to know when the invoice was opened."
        },

    ]
    return (
        <div className='py-8 md:py-16 px-4 md:px-16 flex flex-col items-start justify-start md:items-center md:justify-center bg-[#161c26]'>
            <h2 className='text-2xl text-white md:text-4xl font-semibold mb-12 text-center px-4'>Features of Invoice Generator</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                {
                    features.map(({ id, title, Icon, description }) => {
                        return (
                            <div key={id} className='text-center sm:text-left'>
                                <Icon size={60} className='mb-4 mx-auto sm:mx-0' fill='#7f8fa4' />
                                <h3 className='text-xl font-bold mb-4 text-white'>{title}</h3>
                                <p className='text-sm text-[#7f8fa4]'>{description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <ThemeLink href='invoicesection' className='bg-violet-600 hover:bg-violet-700 mx-auto' title='create invoice for free' />
        </div>
    )
}
