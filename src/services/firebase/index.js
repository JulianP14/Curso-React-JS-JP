import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDotcr5MRFDD9ZkidzlPrKQn5o0dXw_WaY",
    authDomain: "coderhouse-sabados.firebaseapp.com",
    projectId: "coderhouse-sabados",
    storageBucket: "coderhouse-sabados.appspot.com",
    messagingSenderId: "352885142426",
    appId: "1:352885142426:web:586a85aee3bb11ca6b8023"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)