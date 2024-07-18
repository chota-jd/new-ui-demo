import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../assets/images/png/logo.png'



export default function Header() {
    return (

        <header className="bg-[#4fc1c6] p-4  fixed top-0 z-10 w-full">
            <div className='container'>
                <div className='row flex items-center justify-between'>
                    <div>
                        <h1 className='text-[#fff] text-[30px]/[40px] font-extrabold'>General Layout</h1>
                    </div>
                    <ul className="list-none flex items-center gap-[20px]">
                        <li>
                            <Link href="/home">
                                <p className='text-[#fff] text-[17px]/[22px] font-semibold'>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <p className='text-[#fff] text-[17px]/[22px] font-semibold'>About</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/data">
                                <p className='text-[#fff] text-[17px]/[22px] font-semibold'>Data</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <p className='text-[#fff] text-[17px]/[22px] font-semibold'>Contact Us</p>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </header>



    );
}