import React from 'react'
import twitterIcon from './../assets/images/png/twitter.png'
import whatsapp from './../assets/images/png/whatsapp.png'
import logo from './../assets/images/png/logo.png'
import linkedin from './../assets/images/png/linkedin.png'

import Image from 'next/image'

export default function footer() {
    return (

        <div className=" p-[25px] w-[100%] bg-[#240736]">
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image src={logo} alt='twitter' className="h-[50px] w-[100%]" />
                    </div>
                    <div>
                        <p className="text-[#fff] text-[19px]/[26px] font-bold">©2024 All Rights Reserved</p>
                    </div>
                    <ul className="flex gap-[25px] p-[0] m-[0] list-none justify-end">
                        <li className='p-[10px] m-[0] bg-[#fff] rounded-[50%]'>
                            <Image src={twitterIcon} alt='twitter' className="h-[25px] w-[25px]" />
                        </li>
                         <li className='p-[10px] m-[0] bg-[#fff] rounded-[50%]'>
                            <Image src={linkedin} alt='twitter' className="h-[25px] w-[25px]" />
                        </li>
                         <li className='p-[10px] m-[0] bg-[#fff] rounded-[50%]'>
                            <Image src={whatsapp} alt='twitter' className="h-[25px] w-[25px]" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
