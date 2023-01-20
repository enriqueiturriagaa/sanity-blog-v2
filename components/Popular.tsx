import Link from 'next/link'
import React from 'react'

function Themes() {
    return (
        <div className='mb-12'>
            <h2 className='text-xl mb-2'>Popular Posts:</h2>
            <div className=''>
                <Link className='block text-left bg-[#E0F2FF] hover:bg-[#EAFFF3] px-3 py-1 mr-2 text-sm font-gochi mb-2 ' href="/post/embrace-your-funk">🦨 Embrace your Funk!</Link>
                <Link className='block text-left bg-[#E0F2FF] hover:bg-[#EAFFF3] px-3 py-1 mr-2 text-sm font-gochi mb-2 ' href="/post/kaizen">Kaizen Debugging: My Personal Framework for Achieving Success in Any Area of Life</Link>
                <Link className='block text-left bg-[#E0F2FF] hover:bg-[#EAFFF3] px-3 py-1 mr-2 text-sm font-gochi mb-2 ' href="/post/don-t-believe-anyone-not-even-yourself">Don't believe anyone... not even yourself</Link>
                <Link className='block text-left bg-[#E0F2FF] hover:bg-[#EAFFF3] px-3 py-1 mr-2 text-sm font-gochi mb-2 ' href="/post/the-power-of-plateaus-and-how-to-become-the-best-at-your-field">The Power of Plateaus and How to Become the Best at your Field</Link>


            </div>
        </div>
    )
}

export default Themes