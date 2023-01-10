import React from 'react'
import Popular from './Popular'
import Services from './Services'
import Themes from './Themes'



function base() {
    return (
        <div className='sticky top-10'>
            <Themes />
            <Popular />
            <Services />

        </div>
    )
}

export default base

// 
