"use client";

import { error } from "console";
import FirebaseConfig from "../FireBaseConfig/FireBaseCongfig"
import { ref, set, get, update, remove, child } from "firebase/database"
import { useState } from "react";

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const database = FirebaseConfig();

function FireBaseCrud() {
    let [username, setUserName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassWord] = useState('');




    const isNullOrWhiteSpaces = (value: string | null | undefined): boolean => {
        if (value == null) {
            return true;
        }
        return value.toString().replaceAll(' ', '').length < 1;
    }



    let InsertData = () => {
        if (isNullOrWhiteSpaces(email) || isNullOrWhiteSpaces(password)) {
            alert("fill all fileds");
            return;
        }
        set(ref(database, 'Customer/' + username), {
            emaillogin: email,
            passwordlogin: password

        })
    }

    let SelectData = () => {
        const dbref = ref(database);

        get(child(dbref, 'Customer/' + email)).then(snapshot => {
            if (snapshot.exists()) {
                setPassWord(snapshot.val().passwordlogin);
            }

            else {
                alert("no data")
            }
        })
            .catch((error) => {
                console.log(error);
                alert("Error data was unsuccessful");
            })
    }
    return (
        <>

            {/* <label>Username</label>
        <input type="text" value={username} onChange={e=>{setUserName(e.target.value)}}/>
        <br/> */}






            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-balance text-muted-foreground">
                                Enter your email below to login to your account
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    onChange={e => { setEmail(e.target.value) }}


                                />


                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required onChange={e => { setPassWord(e.target.value) }} />
                            </div>
                            <Button type="submit" className="w-full" onClick={InsertData}>
                                Login
                            </Button>
                            <Button type="submit" className="w-full" onClick={InsertData}>
                                Login Edit
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login with Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="#" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )

}

export default FireBaseCrud;