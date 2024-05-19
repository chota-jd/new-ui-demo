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
    let [fullname, setFullName] = useState('');
    let [phone, setPhone] = useState('');
    let [dob, setDob] = useState('');

    const isNullOrWhiteSpaces = (value: string | null | undefined): boolean => {
        if (value == null) {
            return true;
        }
        return value.toString().replaceAll(' ', '').length < 1;
    }

    let InsertData = () => {
        if (isNullOrWhiteSpaces(username)
        || isNullOrWhiteSpaces(fullname)
        || isNullOrWhiteSpaces(phone)
        || isNullOrWhiteSpaces(dob)) {
            alert("fill all fileds");
            return;
        }
        set(ref(database, 'Customer/'+username), {
            fullname: fullname,
            phonenumber: phone,
            dateofbirth: dob

        })
    }

let SelectData = () => {
    const dbref = ref(database);

    get(child(dbref, 'Customer/' + username)).then(snapshot => {
        if(snapshot.exists()){
            setFullName(snapshot.val().fullname);
            setPhone(snapshot.val().phonenumber);
            setDob(snapshot.val().dateofbirth);
        }

        else{
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

        <label>Username</label>
        <input type="text" value={username} onChange={e=>{setUserName(e.target.value)}}/>
        <br/>

        <label>Full Name</label>
        <input type="text" value={fullname} onChange={e=>{setFullName(e.target.value)}}/>
        <br/>

        <label>Phone Number</label>
        <input type="text" value={phone} onChange={e=>{setPhone(e.target.value)}}/>
        <br/>

        <label>Date of Birth</label>
        <input type="text" value={dob} onChange={e=>{setDob(e.target.value)}}/>
        <br/>

        <button onClick={InsertData}>Insert Data</button>
        <button>Update Data</button>
        <button>Delete Data</button>
        <button onClick={SelectData}>Select Data</button>


    


        </>

    )

}

export default FireBaseCrud;