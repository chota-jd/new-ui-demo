"use client";

import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from "react";
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
import { addBasicDeatils, IDetails, updateBasicDeatils } from '@/utils/firebase';
import { useDispatch, useSelector } from "react-redux";
import { fetchBasicDeatils, removeBasicDeatils } from "@/store/apps/deatils";
import { AppDispatch, RootState } from '@/store';
import StoreProvider from '../StoreProvider';


// const details = [
//     {
//         firstName: "Chirage",
//         lastName: "Prajapati",
//         contact: "12164646548",
//         email: "abc#gmail.com",
//     },
//     {
//         firstName: "Chirage",
//         lastName: "Prajapati",
//         contact: "12164646548",
//         email: "abc#gmail.com",
//     },
//     {
//         firstName: "Chirage",
//         lastName: "Prajapati",
//         contact: "12164646548",
//         email: "abc#gmail.com",
//     },

// ]



export default function Page() {
    const [formVisible, setFormVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState<number | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    const details = useSelector((state: RootState) => state.Deatils.deatils);
    const [currentItemId, setCurrentItemId] = useState<string | null>(null);
    const [editMode, setEditMode] = useState(false);
    

    const handleEdit = (item: IDetails) => {
        setCurrentItemId(item.id ?? null);
        setFirstName(item.firstName);
        setLastName(item.lastName);
        setEmail(item.email);
        setNumber(item.number);
        setEditMode(true);
        setIsOpen(true);
      };


      const handleSave = async () => {
        console.log('Save Button clicked!');
        if (firstName && lastName && email && number) {
            const details = {
                firstName,
                lastName,
                email,
                number,
            };
    
          try {
            if (currentItemId) {
              await updateBasicDeatils(currentItemId, details);
            } else {
              await addBasicDeatils(details);
            }
            await dispatch(fetchBasicDeatils());
             // Reset form fields after successful save
             setFirstName('');
             setLastName('');
             setEmail('');
             setNumber(null);
             setIsOpen(false); 
             setEditMode(false);
          } catch (error) {
            console.error("Error saving BasicDeatils:", error);
          }
        } else {
          console.error("Please fill out all fields");
        }
      };
    const handleDelete = (id: string | undefined) => {
        if (id) {
            dispatch(removeBasicDeatils(id));
        } else {
            console.error("BasicDeatils: undefined");
        }
    };


    const handleAddButtonClick = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setNumber(null);
        setEditMode(false);
        setIsOpen(true);
    };

    useEffect(() => {
        dispatch(fetchBasicDeatils());
    }, [dispatch]);
    return (
        <>
            <StoreProvider>
            <Header />

            <div className='pt-[3.125rem] mb-28 mt-[4.5rem]'>
                <div className='container'>
                    <div className='bg-[#eee] pt-2.5 pr-[0.938rem] pb-2.5 pl-[0.938rem] rounded-lg mb-5 flex justify-between items-center'>
                        <h1 className='text-[1.125rem]/[1.563rem] text-[#000] font-medium'>Basic Details</h1>
                        <Button className='pt-[0.063rem] pb-[0.063rem] pl-5 pr-5 text-[0.938rem]/[1.375rem]'
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
                                        <Input
                                            type="text"
                                            name="firstName"
                                            placeholder="Enter First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="p-1 space-y-1.5">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input
                                            type="text"
                                            name="lastName"
                                            placeholder="Enter Last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>

                                    <div className="p-1 space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            type="text"
                                            name="email"
                                            placeholder="Enter Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="p-1 space-y-1.5">
                                        <Label htmlFor="contact">Contact</Label>
                                        <Input
                                            type="text"
                                            name="contact"
                                            placeholder="Enter Contact"
                                            value={number !== null ? number : ''}
                                            onChange={(e) => setNumber(Number(e.target.value))}
                                        />
                                    </div>
                                </div>


                                <DialogFooter>
                                    <div className='flex justify-end items-end mt-5 gap-5'>
                                        <Button className='pt-[0.063rem] pb-[0.063rem] pl-5 pr-5 text-[0.938rem]/[1.375rem]'
                                            onClick={handleSave}
                                        >
                                        {editMode ? "Update" : "Add New"}
                                        </Button>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                    <Card className="shadow-lg pt-5">
                        <CardContent>
                            <div className=''>
                                <Table>
                                    <TableHeader className="bg-[#f5f6fa] font-bold">
                                        <TableRow >
                                            <TableHead className="font-bold">First Name</TableHead>
                                            <TableHead className="font-bold">Last Name</TableHead>
                                            <TableHead className="font-bold">Email</TableHead>
                                            <TableHead className='font-bold'>Contact</TableHead>
                                            <TableHead className='text-right font-bold'>Action / CrudOP</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {details && details.map((item, index) => (
                                            <TableRow key={item.firstName}>
                                                <TableCell className="">{item.firstName}</TableCell>
                                                <TableCell>{item.lastName}</TableCell>
                                                <TableCell>{item.email}</TableCell>
                                                <TableCell className="">{item.number}</TableCell>
                                                <TableCell className='text-right'>
                                                    <div className='flex gap-2.5 justify-end'>
                                                    <Button
                                                    onClick={() => handleEdit(item)}
                                                    >
                                                    <Edit size={14} className="p-0" />
                                                        </Button>
                                                        <Button 
                                                          onClick={() => handleDelete(item.id)}
                                                          >
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
            </StoreProvider> 
        </>
    );
}
