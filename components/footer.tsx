import React from 'react'
import twitterIcon from './../assets/images/png/twitter.png'
import whatsapp from './../assets/images/png/whatsapp.png'
import logo from './../assets/images/png/logo.png'
import linkedin from './../assets/images/png/linkedin.png'

import Image from 'next/image'

export default function footer() {
    return (
<>
        <div className=" p-[20px] w-[100%] bg-[#4fc1c6] shadow-lg fixed bottom-0">
            <div className='container'>
                    <div>
                        <p className="text-[#fff] text-[15px]/[22px] text-center font-medium">©2024 All Rights Reserved</p>
                    </div>
            </div>
        </div>
        </>
    )
}
