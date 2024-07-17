// "use client";


// import { useState } from "react";
// import FirebaseConfig from "../FireBaseConfig/FireBaseCongfig";
// import { ref, set, get, update, child, onValue, push } from "firebase/database";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import Link from "next/link";

// const database = FirebaseConfig();

// function FireBaseCrud() {
//     let [username, setUserName] = useState('');
//     let [email, setEmail] = useState('');
//     let [password, setPassWord] = useState('');
//     let [dataInserted, setDataInserted] = useState(false);
    

//     const isNullOrWhiteSpaces = (value: string | null | undefined): boolean => {
//         if (value == null) {
//             return true;
//         }
//         return value.toString().replaceAll(' ', '').length < 1;
//     }
//     let InsertData = () => {
//         if (isNullOrWhiteSpaces(email) || isNullOrWhiteSpaces(password)) {
//             alert("fill all fields");
//             return;
//         }
//         set(ref(database, 'Customer/' + username), {
//             emaillogin: email,
//             passwordlogin: password
//         }).then(() => {
//             setDataInserted(true);
//         });
//     }

//     // let SelectData = () => {
//     //     const dbref = ref(database);

//     //     get(child(dbref, 'Customer/' + email)).then(snapshot => {
//     //         if (snapshot.exists()) {
//     //             setPassWord(snapshot.val().passwordlogin);
//     //         } else {
//     //             alert("no data");
//     //         }
//     //     }).catch((error) => {
//     //         console.log(error);
//     //         alert("Error data retrieval was unsuccessful");
//     //     });
//     // }

//     let UpdateData = () => {
//         if (isNullOrWhiteSpaces(email) || isNullOrWhiteSpaces(password)) {
//             alert("fill all fields");
//             return;
//         }
//         update(ref(database, 'Customer/' + username), {
//             emaillogin: email,
//             passwordlogin: password
//         }).then(() => {
//             alert("Data updated successfully");
//             setEmail('');
//             setPassWord('');
//         }).catch((error) => {
//             console.log(error);
//             alert("Error updating data");
//         });
//     }
    
//     const addNewUser = () => {
//         if (isNullOrWhiteSpaces(email) || isNullOrWhiteSpaces(password)) {
//             alert("Fill all fields");
//             return;
//         }
        
//         const newUserRef = ref(database, 'Customer'); // Reference to the 'Customer' node
//         const newUser = {
//             email: email,
//             password: password
//         };
    
//         push(newUserRef) // Push a new child node under 'Customer'
//             .then((newChildRef) => {
//                 set(newChildRef, newUser) // Set data under the newly created child node
//                     .then(() => {
//                         alert("New user added successfully");
//                         // setEmail('');
//                         // setPassWord('');
//                     })
//                     .catch((error) => {
//                         console.log(error);
//                         alert("Error adding new user");
//                     });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 alert("Error creating new user");
//             });
//     }
    

//     return (
//         <>
//             <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
//                 <div className="flex items-center justify-center py-12">
//                     <div className="mx-auto grid w-[350px] gap-6">
//                         <div className="grid gap-2 text-center">
//                             <h1 className="text-3xl font-bold">Login</h1>
//                             <p className="text-balance text-muted-foreground">
//                                 Enter your email below to login to your account
//                             </p>
//                         </div>
//                         <div className="grid gap-4">
//                             <div className="grid gap-2">
//                                 <Label htmlFor="email">Email</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     placeholder="m@example.com"
//                                     required
//                                     value={email}
//                                     onChange={e => { setEmail(e.target.value) }}
//                                 />
//                             </div>
//                             <div className="grid gap-2">
//                                 <div className="flex items-center">
//                                     <Label htmlFor="password">Password</Label>
//                                     {/* <Button variant="link" onClick={SelectData}>
//                                         Retrieve Password
//                                     </Button> */}
//                                 </div>
//                                 <Input id="password" type="password" required value={password} onChange={e => { setPassWord(e.target.value) }} />
//                             </div>
//                             {!dataInserted && (
//                                 <Button type="submit" className="w-full" onClick={InsertData}>
//                                     Login Add
//                                 </Button>
//                             )}
//                             {dataInserted && (
//                                 <Button type="submit" className="w-full" onClick={UpdateData}>
//                                     Login Edit
//                                 </Button>
//                             )}
// <Button variant="outline" className="w-full" onClick={addNewUser}>
//                                 New User Add
//                             </Button>

//                             <Button variant="outline" className="w-full" >
//                                 Login with Google
//                             </Button>
//                         </div>
//                         {/* <div className="mt-4 text-center text-sm">
//                             Don&apos;t have an account?{" "}
//                             <Link href="#" className="underline">
//                                 Sign up
//                             </Link>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FireBaseCrud;
