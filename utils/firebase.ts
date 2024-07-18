import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/config/firebase";
import {
    Timestamp,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    query,
    setDoc,
    updateDoc,
    where,
  } from "firebase/firestore/lite";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import moment from "moment";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export interface IContact {
    id?: string;
    firstName: string;
    lastName: string;
    mesaage: string;
    subject: string;
    createdAt?: Date | Timestamp;
  }

  export interface IDetails {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    number: number;
    createdAt?: Date | Timestamp;
  }

  // ADD ContactDeatils Collection
const addContactDeatils = async (contact: IContact) => {
    const contactId = contact.id || doc(collection(db, "contact")).id;
    await setDoc(doc(db, "contact", contactId), {
      ...contact,
      createdAt: contact.createdAt || Timestamp.fromDate(moment().toDate()),
    });
    const addedContact = { ...contact, id: contactId };
    console.log("contact added:", addedContact);
    return addedContact;
  };

    // ADD BasicDeatils Collection
const addBasicDeatils = async (details: IDetails) => {
    const detailsId = details.id || doc(collection(db, "basicDeatils")).id;
    await setDoc(doc(db, "basicDeatils", detailsId), {
      ...details,
      createdAt: details.createdAt || Timestamp.fromDate(moment().toDate()),
    });
    const addedDetails = { ...details, id: detailsId };
    console.log("basicDeatils added:", addedDetails);
    return addedDetails;
  };

  //DELETE BasicDeatils
  const deleteBasicDeatils = async (detailsId: string) => {
    try {
        const basicDeatilsDocRef = doc(db, "basicDeatils", detailsId);
        await deleteDoc(basicDeatilsDocRef);
        console.log("BasicDeatils deleted:", detailsId);
    } catch (error) {
        console.error("Error deleting BasicDeatils", error);
    }
};

  //GET BasicDeatils
const getbasicDeatils = async (): Promise<IDetails[]> => {
    const q = query(collection(db, "basicDeatils"));
    const querySnapshot = await getDocs(q);
    const basicDeatilsList: IDetails[] = [];
    querySnapshot.forEach((doc) => {
        basicDeatilsList.push({ ...doc.data(), id: doc.id } as IDetails);
    });
    return basicDeatilsList;
  };

  // EDIT BasicDeatils
const updateBasicDeatils = async (detailsId: string, updatedBasicDeatils: Partial<IDetails>) => {
    try {
      const basicDeatilsDocRef = doc(db, "basicDeatils", detailsId);
      await updateDoc(basicDeatilsDocRef, {
        ...updatedBasicDeatils,
        updatedAt: Timestamp.fromDate(moment().toDate()),
      });
      console.log("BasicDeatils updated:", detailsId);
    } catch (error) {
      console.error("Error BasicDeatils updated:", error);
    }
  };


  export {
    // ContactDeatils Collection
    addContactDeatils,

    // ADD BasicDeatils Collection
    addBasicDeatils,
    deleteBasicDeatils,
    getbasicDeatils,
    updateBasicDeatils
  };

  export default app;

