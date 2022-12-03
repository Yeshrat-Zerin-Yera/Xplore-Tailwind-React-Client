// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAc9L-qE1uvreRs4ERVKJ7WdJVZt3elTbU",
    authDomain: "xplore-tailwind-react-client.firebaseapp.com",
    projectId: "xplore-tailwind-react-client",
    storageBucket: "xplore-tailwind-react-client.appspot.com",
    messagingSenderId: "286580251149",
    appId: "1:286580251149:web:ff84bdb18a90bccd2f1344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;