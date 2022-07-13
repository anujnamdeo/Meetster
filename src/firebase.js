import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// tesing mode 
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCA9Sr8jhZSRG1gNfzFWsRXBUY9u15sLIQ",
    authDomain: "meetster-6fe43.firebaseapp.com",
    databaseURL: "https://meetster-6fe43-default-rtdb.firebaseio.com",
    projectId: "meetster-6fe43",
    storageBucket: "meetster-6fe43.appspot.com",
    messagingSenderId: "253432768171",
    appId: "1:253432768171:web:70fd92e46001836d9bf9ee",
    measurementId: "G-VSW85GN07V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
export const database = getDatabase(app);