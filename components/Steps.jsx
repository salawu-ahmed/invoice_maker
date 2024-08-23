import React from 'react'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from 'react-icons/tb'
import { FaChevronRight } from 'react-icons/fa'

export default function Steps() {
  return (
    <div className='py-8 md:py-16 px-4 md:px-16 flex flex-col items-start justify-start md:items-center md:justify-center bg-slate-50 text-black'>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-center px-4">Create Your Invoice in Less Than 2 Minutes</h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mx-auto">
        <div className='flex items-center gap-1'>
          <TbCircleNumber1 size={25} />
          <span>Invoice details</span>
        </div>
        <FaChevronRight className='hidden md:block' />
        <div className='flex items-center gap-1'>
          <TbCircleNumber2 size={25} />
          <span>Your Bank details (Optional)</span>
        </div>
        <FaChevronRight className='hidden md:block' />
        <div className='flex items-center gap-1'>
          <TbCircleNumber3 size={25} color='rgb(97, 113, 131)' />
          <span>Select Design & Colors <br /> (Download or Email Invoice) </span>
        </div>
      </div>
    </div>
  )
}
