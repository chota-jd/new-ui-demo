import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'

export default function contact() {

    return (
        <>    
         <div className='mt-[50px]'>
            <div className='container'>
                <h1 className=' text-[30px]/[40px] text-[#000]'>Get In Touch
                </h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 p-4">
                        <label>First name</label>
                        <Input type="text" placeholder="Email" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 p-4">
                        <label>First name</label>
                        <Input type="text" placeholder="Email" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 p-4">
                        <label>First name</label>
                        <Input type="text" placeholder="Email" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 p-4">
                        <label>First name</label>
                        <Input type="text" placeholder="Email" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                    <div className="bg-gray-200 p-4">
                    <button className='text-[#fff] text-[15px]/[21px]  rounded-[25px] border-[1px] py-[10px] px-[30px]'>Submit</button>
                    </div>
                </div>
        </div>
        </>
    )
}
