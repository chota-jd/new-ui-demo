import React from 'react'
import { Button } from "@/components/ui/button"


export default function service() {
    return (
        <>
            <div className='mt-[50px]'>
                <div className='container'>
                    <h1 className='text-center text-[30px]/[40px] text-[#000]'>Services</h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-200 p-4 h-[150px]  text-center">
                        <Button>Button</Button>
                        </div>
                        <div className="bg-gray-200 p-4 h-[150px] text-center">
                        <Button>Button</Button>
                        </div>
                        <div className="bg-gray-200 p-4 h-[150px] text-center">
                        <Button>Button</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
