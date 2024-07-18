"use client";

import React from 'react'
import { Button } from "@/components/ui/button"
import { ReactTyped } from "react-typed";
import Header from './header';
import Footer from '@/components/footer';




export default function service() {
    return (
        <>
                    <Header />

            <div className="mt-12">
                <div className="flex gap-8 p-5 w-full h-full m-auto mb-[60px] mt-[180px]">
                    <h1 className='text-7xl'>
                        Welcome To
                        <div className="font-bold text-9xl">
                            <ReactTyped
                                strings={["General Layout !"]}
                                typeSpeed={180}
                                loop
                                backSpeed={10}
                                cursorChar=""
                                showCursor={true}
                            />
                        </div>
                    </h1>
                </div>
            </div>
            <Footer/>

        </>
    )
}
