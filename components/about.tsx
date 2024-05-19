import Image from 'next/image'
import React from 'react'
import aboutImage from './../assets/images/png/about.jpg'

export default function about() {
    return (
        <div>
            <div className='mt-[50px]'>
                <div className='container'>
                    <h1 className='text-center text-[30px]/[40px] text-[#000]'>About</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-200 p-4">
                            <Image src={aboutImage} className="h-[300px] w-[100%] object-cover" alt='' />
                        </div>
                        <div className="bg-gray-200 p-4">
                            <h1>What is Lorem Ipsum?</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                standard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
