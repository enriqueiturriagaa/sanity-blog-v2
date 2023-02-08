import React from 'react'
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import AboutComp from '../components/AboutComp';
import Footer from '../components/Footer';
import Header from '../components/Header'
import RightPannel from '../components/RightPannel';
import '../styles/globals.css';
import Popular from '../components/Popular';
import Services from '../components/Services';
import SubscribeForm from '../components/SubscribeForm';
import NewsletterComp from '../components/NewsletterComp';


const query2 = groq`
    *[_type == "category"]{
  _id,
  _type,
  title,
  slug,
  "posts": *[_type == "post" && references(^._id)]{
    title,
    slug
  }
}`
export const revalidate = 60;
export default function about() {

    // const categories = await client.fetch(query2);
    return (
        <div className='bg-[#FBFAFB] '>
            <div className='max-w-5xl mx-auto'>
                <Header />
                <div className="bg-[#FBFAFB] text-[#343434] flex  px-12">
                    <div className="w-full lg:w-2/3 auto lg:pr-20 min-w-[60%]">
                        <NewsletterComp />
                    </div>
                    <div className="font-gochi lg:1/3 hidden lg:inline max-w-md">
                        {/* <RightPannel categories={categories} /> */}
                        <div className='sticky top-10'>

                            <div className='mb-12'>
                                <h2 className='text-xl mb-2'>Things I can do:</h2>
                                <div className=''>
                                    <p className='inline-block text-left bg-[#FFEBE0] px-3 py-1 mr-2 text-sm font-gochi mb-2 '>I code</p>
                                    <p className='inline-block text-left bg-[#FFEBE0] px-3 py-1 mr-2 text-sm font-gochi mb-2 '>I design</p>
                                    <p className='inline-block text-left bg-[#FFEBE0] px-3 py-1 mr-2 text-sm font-gochi mb-2 '>I Grapple</p>
                                    <p className='inline-block text-left bg-[#FFEBE0] px-3 py-1 mr-2 text-sm font-gochi mb-2 '>I Surf</p>
                                    <p className='inline-block text-left bg-[#FFEBE0] px-3 py-1 mr-2 text-sm font-gochi mb-2 '>I build products</p>


                                </div>
                            </div>
                            {/* ENDS */}
                            <Popular />
                            <Services />

                        </div>

                    </div>

                </div>
                <Footer />

            </div>
        </div>
    )
}
