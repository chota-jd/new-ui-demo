import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, Timestamp, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbFGnFJ7n2R3RS_os9S1XcMuYF2zgNiu0",
        authDomain: "new-ui-bd230.firebaseapp.com",
        databaseURL: "https://new-ui-bd230-default-rtdb.firebaseio.com",
        projectId: "new-ui-bd230",
        storageBucket: "new-ui-bd230.appspot.com",
        messagingSenderId: "482669452081",
        appId: "1:482669452081:web:be0ddeb866055866f2ee10",
        measurementId: "G-X92BBGHDHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export interface IContactDetails {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
  createdAt?: Timestamp;
}

export const addContactDetails = async (contact: Omit<IContactDetails, 'createdAt'>) => {
  try {
    const docRef = await addDoc(collection(db, "contact"), {
      ...contact,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Error adding document");
  }
};
