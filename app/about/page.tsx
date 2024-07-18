"use client";

import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer';
import { ReactTyped } from "react-typed";


export default function page() {
  return (
    <>
    <Header/>
    <div className="mt-12">
                <div className="flex gap-8 p-5 w-full h-full m-auto mb-[60px] mt-[180px]">
                    <h1 className='text-7xl'>
                        {/* Welcome To */}
                        <div className="font-medium text-9xl text-black opacity-50">
                            <ReactTyped
                                strings={["Comming Soon !"]}
                                typeSpeed={180}
                                // loop
                                backSpeed={10}
                                cursorChar=""
                                showCursor={true}
                            />
                        </div>
                    </h1>
                </div>
            </div>
            <Footer/>    </>
  )
}
