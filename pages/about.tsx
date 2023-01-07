import React from 'react'
import AboutComp from '../components/AboutComp';
import Footer from '../components/Footer';
import Header from '../components/Header'
import RightPannel from '../components/RightPannel';
import '../styles/globals.css';


function about() {
    return (
        <div className='bg-[#FBFAFB] '>
            <div className='max-w-5xl mx-auto'>
                <Header />
                <div className="bg-[#FBFAFB] text-[#343434] flex  px-12">
                    <div className="w-full lg:w-2/3  lg:pr-20 min-w-[60%]">
                        <AboutComp />
                    </div>
                    <div className="font-gochi lg:1/3 hidden lg:inline max-w-md">
                        <RightPannel />
                    </div>

                </div>
                <Footer />

            </div>
        </div>
    )
}

export default about
