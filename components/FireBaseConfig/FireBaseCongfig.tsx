// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function FirebaseConfig(){

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
      return getDatabase(app);

}

export default FirebaseConfig;


