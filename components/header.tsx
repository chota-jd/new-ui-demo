import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../assets/images/png/logo.png'



export default function Header() {
    return (

        <header className="bg-[#4fc1c6] p-4 shadow-lg">
            <div className='container'>
                <div className='row flex items-center justify-between'>
                    <div>
                        <h1 className='text-[#fff] text-[30px]/[40px] font-extrabold'>Admin Panel</h1>
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
                            <Link href="/service">
                                <p className='text-[#fff] text-[17px]/[22px] font-semibold'>Service</p>
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