"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header";
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Footer from '@/components/footer';
import Image from 'next/image';
import facebook from '@/assets/contact/facebook.svg';
import google from '@/assets/contact/google-plus.svg';
import instagram from '@/assets/contact/instagram.svg';
import whatsapp from '@/assets/contact/whatsapp.svg';
import youtube from '@/assets/contact/youtube.svg';
import { addContactDetails, IContactDetails } from '@/firebase/firebase';


export default function ContactPage() {
    const [contact, setContact] = useState<Omit<IContactDetails, 'createdAt'>>({
        firstName: '', 
        lastName: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContact(prevContact => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting contact details:", contact); // Add console log here

        try {
            const addedContact = await addContactDetails(contact);
            console.log("Contact details added successfully:", addedContact);
            alert("Contact details added successfully!");
        } catch (error) {
            console.error("Error adding contact details:", error);
            alert("Failed to add contact details.");
        }
    };
    return (
        <>
            <Header />
            <div className="flex gap-8 p-5 max-w-screen-lg m-auto mb-[60px]">
                <Card className="w-[600px] shadow-lg">
                    <CardHeader>
                        <CardTitle>Reach Us</CardTitle>
                        <CardDescription>Wanna meet in person and get detailed information? Reach us at following address</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Address</Label>
                                    <p className="text-sm text-muted-foreground">Jio World Centre, G Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400098</p>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Contact Numbers</Label>
                                    <p className="text-sm text-muted-foreground">1020520306</p>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Email</Label>
                                    <p className="text-sm text-muted-foreground">demo.mumbai@gmail.com</p>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Social Media</Label>
                                    <div className="flex gap-1">
                                        <Image src={whatsapp} alt='whatsapp' className="h-[21px] w-[21px]" />
                                        <Image src={google} alt='whatsapp' className="h-[21px] w-[21px]" />
                                        <Image src={facebook} alt='whatsapp' className="h-[21px] w-[21px]" />
                                        <Image src={instagram} alt='whatsapp' className="h-[21px] w-[21px]" />
                                        <Image src={youtube} alt='whatsapp' className="h-[21px] w-[21px]" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <Card className="w-[600px] shadow-lg">
                    <CardHeader>
                        <CardTitle>Get In Touch</CardTitle>
                        <CardDescription>Have a query or suggestion? Please let us know by filling the form.</CardDescription>
                    </CardHeader>
                    <CardContent>
                            <div className="max-w-lg m-auto">
                                <div className="p-1 space-y-1.5">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input type="text" name="firstName" placeholder="First name" value={contact.firstName} onChange={handleChange} />
                                </div>
                                <div className="p-1 space-y-1.5">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input type="text" name="lastName" placeholder="Last name" value={contact.lastName} onChange={handleChange} />
                                </div>
                                <div className="p-1 space-y-1.5">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input type="text" name="subject" placeholder="Subject" value={contact.subject} onChange={handleChange} />
                                </div>
                                <div className="p-1 space-y-1.5">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea name="message" placeholder="Message" value={contact.message} onChange={handleChange} />
                                </div>
                                <div className="text-black mt-9 p-6 justify-center items-center flex">
                                <Button onClick={handleSubmit} className="text-[#fff] text-[15px]/[21px] rounded-[25px] border-[1px] py-[10px] px-[30px] justify-center items-center">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}
