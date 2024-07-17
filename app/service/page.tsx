"use client";

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Footer from '@/components/footer';
import { Edit, EyeIcon, Plus, Trash } from "lucide-react";


const details = [
    {
        firstName: "Chirage",
        lastName: "Prajapati",
        contact: "12164646548",
        email: "abc#gmail.com",
    },
    {
        firstName: "Chirage",
        lastName: "Prajapati",
        contact: "12164646548",
        email: "abc#gmail.com",
    },
    {
        firstName: "Chirage",
        lastName: "Prajapati",
        contact: "12164646548",
        email: "abc#gmail.com",
    },

]



export default function Page() {
    const [formVisible, setFormVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleAddButtonClick = () => {
        setIsOpen(true);
        setFormVisible(true);
    };

    return (
        <>
            <Header />

            <div className='pt-[50px]'>
                <div className='container'>
                    <div className='bg-[#eee] pt-[10px] pr-[15px] pb-[10px] pl-[15px] rounded-lg mb-[20px] flex justify-between items-center'>
                        <h1 className='text-[18px]/[25px] text-[#000] font-medium'>Basic Details</h1>
                        <Button className='pt-[1px] pb-[1px] pl-[20px] pr-[20px] text-[15px]/[22px]'
                            onClick={handleAddButtonClick}
                        >Add</Button>

                        <Dialog open={isOpen} onOpenChange={setIsOpen}>
                            <DialogTrigger asChild>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add Your Deatils</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="p-1 space-y-1.5">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input type="text" name="firstName" placeholder="Enter First Name" />
                                    </div>
                                    <div className="p-1 space-y-1.5">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input type="text" name="lastName" placeholder="Enter Last Name" />
                                    </div>

                                    <div className="p-1 space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="text" name="email" placeholder="Enter Email" />
                                    </div>
                                    <div className="p-1 space-y-1.5">
                                        <Label htmlFor="contact">Contact</Label>
                                        <Input type="text" name="contact" placeholder="Enter Contact" />
                                    </div>
                                </div>


                                <DialogFooter>
                                    <div className='flex justify-end items-end mt-[20px] gap-[20px]'>
                                        {/* <Button className='pt-[1px] pb-[1px] pl-[20px] pr-[20px] text-[15px]/[22px]'
                                    onClick={() => setFormVisible(false)}
                                >Cancel</Button> */}
                                        <Button className='pt-[1px] pb-[1px] pl-[20px] pr-[20px] text-[15px]/[22px]'
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Save</Button>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                    <Card className="shadow-lg pt-[20px]">
                        <CardContent>
                            <div className=''>
                                <Table>
                                    <TableHeader className="bg-[#f5f6fa] font-bold">
                                        <TableRow >
                                            <TableHead className="font-bold">First Name</TableHead>
                                            <TableHead className="font-bold">Last Name</TableHead>
                                            <TableHead className="font-bold">Email</TableHead>
                                            <TableHead className='font-bold'>Contact</TableHead>
                                            <TableHead className='text-right font-bold'>Action</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {details.map((details) => (
                                            <TableRow key={details.firstName}>
                                                <TableCell className="">{details.firstName}</TableCell>
                                                <TableCell>{details.lastName}</TableCell>
                                                <TableCell>{details.email}</TableCell>
                                                <TableCell className="">{details.contact}</TableCell>
                                                <TableCell className='text-right'>
                                                    <div className='flex gap-[10px] justify-end'>
                                                        <Button>
                                                            <Edit size={14} className="p-0" />
                                                        </Button>
                                                        <Button>
                                                            <Trash size={14} className="p-0" />
                                                        </Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </>
    );
}
