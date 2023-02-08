import Link from 'next/link'
import React from 'react'

function SubscribeForm() {
  return (
    <div>
      <div className='mb-12 min-w-max'>
        <h2 className='text-xl mb-0 font-gochi'>Subscribe to my Newsletter:</h2>
        <Link className='inline-block text-left underline hover:bg-[#E0F2FF] py-1  text-sm font-gochi mb-2 ' href="https://just3things.substack.com/archive" target="_blank">Not sure? 👉 Read previous emails here!</Link>
        <div className=''>
          <iframe className="mb-0 p-0" src="/html/form.html" ></iframe>

        </div>
      </div>
    </div>
  )
}

export default SubscribeForm