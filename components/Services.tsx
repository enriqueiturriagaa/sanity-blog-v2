import Link from 'next/link'
import React from 'react'

function Services() {
    return (
        <div><div className='mb-12'>
            <h2 className='text-xl mb-2'>Services:</h2>
            <div className=''>
                <Link className='inline-block text-left bg-[#EAFFF3] hover:bg-[#E0F2FF] px-3 py-1 mr-2 text-sm font-gochi mb-2 ' href="https://dev.enrique.zone/" target="_blank">Web Development</Link>
                <Link className='inline-block text-left bg-[#EAFFF3] hover:bg-[#E0F2FF] px-3 py-1 mr-2 text-sm font-gochi mb-2 ' href="https://www.enrique.zone/" target="_blank">Web and App Design and Consultancy</Link>
                <Link className='inline-block text-left bg-[#EAFFF3] hover:bg-[#E0F2FF] px-3 py-1 mr-2 text-sm font-gochi mb-2 ' href="https://dev.enrique.zone/" target="_blank">Web3 Development (Smart Contracts and dApps)</Link>


            </div>
        </div></div>
    )
}

export default Services