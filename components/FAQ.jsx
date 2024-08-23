'use client'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import ThemeLink from "./ThemeLink";

export default function FAQ() {
    const [isOpen, setIsOpen] = useState(false)
    const handleIsOpen = () => {    
        e.target.parentNode.classList.add('.active')
    }
    const FAQs = [
        {
            question: "How can I make an invoice for free?",
            answer: "Refrens invoice generator allows you to create invoices for free without taking much time. Head over to Refrens invoice generator and start creating invoices using pre-formatted invoice templates. You can add your logo, brand colors, and multiple invoice templates and use many more such features to keep your brand consistent."
        },
        {
            question: "Which is the best free invoice generator?",
            answer: "Refrens is the best free invoice generator as you can create invoices for clients without paying a single amount. You can freely customize your fields and columns, download the invoice as PDF or send it directly via email, or share it via WhatsApp and within one click you can create a delivery challan, payment receipt, debit note and credit note. Not only this, you can create quotations, purchase orders, proforma invoices, payment receipts, delivery challan, and expense management and can also keep the records of your inventory."
        },
        {
            question: "Is this invoice generator really free?",
            answer: "FREE! Refrens invoice generator is free for freelancers, agencies, small businesses, and entrepreneurs. You can generate 20 documents every year. Also, manage invoices and access free templates."
        },
        {
            question: "How can I make an invoice for freeCan I generate a PDF invoice using this invoice generator?",
            answer: "Yes, it is easy to download the PDF invoice using Refrens invoice maker. , clicking on the option of 'Download PDF' will make your invoice in PDF format. Moreover, you can also email the invoice, print the invoice, and send the invoice via WhatsApp or schedule for future dates."
        },
        {
            question: "Will there be any ads on the invoices?",
            answer: "Not at all. Your invoices will carry no ads. On the free version, the documents will carry a small non-intrusive Refrens branding. It helps us spread the word and keep the free features going. Documents of Premium customers will carry only your business' branding."
        },
        {
            question: "Can I save my invoices in this online invoice generator?",
            answer: "Yes. All the invoices created by you are saved online. You can access all the invoices anytime just by logging into your account."
        },
        {
            question: "What happens to my data when I want to leave?",
            answer: "When you decide to leave Refrens, you have the option to download all your customer data, invoices, quotations, and other documents at any time. This ensures that you have access to your important business information even after discontinuing your use of the platform. Refrens prioritizes data security and allows users to retain their data for their records or for transitioning to another platform if needed."
        },

    ]
    return (
        <div className='py-8 md:py-16 px-4 md:px-16 flex flex-col items-start justify-start md:items-center md:justify-center bg-slate-100'>
            <h2 className='text-2xl md:text-4xl font-semibold mb-12 text-center px-4 text-black'>Frequently Asked Questions(FAQ)</h2>
            {
                FAQs.map((faq, i) => {
                    return (
                        <div className="w-4/5 border p-3 text-black mb-6 mx-auto" key={i}>
                            <div className={`title flex justify-between w-full items-center text-black font-bold ${isOpen ? "border-b mb-4 pb-4" : ""} accordion-title`}>
                                {faq.question}
                                <span>
                                    {
                                        isOpen ? (
                                            <BsChevronUp
                                                onClick={() => setIsOpen(false)}
                                                className="font-bold"
                                            />
                                        ) : (
                                            <BsChevronDown
                                                onClick={() => setIsOpen(true)}
                                                className="font-bold"
                                            />
                                        )
                                    }
                                </span>
                            </div>
                            <div className={`content transition-display duration-700 ease-in-out ${isOpen ? "block " : "hidden"}`}>{faq.answer}</div>
                        </div>
                    )
                })
            }
            <ThemeLink href="/invoice" title="Create Invoice For FREE" className="bg-red-600 hover:bg-red-700 mx-auto" />


        </div>
    );
}
