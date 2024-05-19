import React from 'react';



export default function Header() {
    return (

        <header className="bg-[#240736] p-[15px]">
            <div className='container'>
                <div className='row flex items-center justify-between'>
                    <ul className='list-none flex items-center gap-[20px]'>
                        <li>
                            <a className='text-[#fff] text-[22px]/[28px]'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a className='text-[#fff] text-[22px]/[28px]'>
                                About
                            </a>
                        </li>
                        <li>
                            <a className='text-[#fff] text-[22px]/[28px]'>
                            Service
                            </a>
                        </li>
                        <li>
                            <a className='text-[#fff] text-[22px]/[28px]'>
                                Faq
                            </a>
                        </li>
                        <li>
                            <a className='text-[#fff] text-[22px]/[28px]'>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className='flex gap-[20px]'>
                        <button className='text-[#fff] text-[15px]/[21px]  rounded-[25px] border-[1px] py-[10px] px-[30px]'>Login</button>
                        <button className='text-[#fff] text-[15px]/[21px]  rounded-[25px] border-[1px] py-[10px] px-[30px]'>Sign up</button>
                    </div>
                </div>
            </div>
        </header>



    );
}