import React from 'react'
import ClientSideRoute from './ClientSideRoute'
import Popular from './Popular'
import Services from './Services'

type Props = {
    categories: Category[];
}


function base({ categories }: Props) {
    return (
        <div className='sticky top-10'>

            <div className='mb-12'>
                <h2 className='text-xl mb-2'>Themes:</h2>
                <div>

                    {categories.map((category) => (
                        <ClientSideRoute key={category._id} route={`/category/${category.slug.current}`}>

                            <p className='inline-block text-center bg-[#FFEBE0] px-3 py-1 mr-2 mb-2 text-sm font-gochi'>
                                #{category.title}
                            </p>

                        </ClientSideRoute>
                    ))}
                </div>
            </div>
            {/* ENDS */}
            <Popular />
            <Services />

        </div>
    )
}

export default base

// 
