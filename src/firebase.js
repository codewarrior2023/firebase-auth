import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDKvAF6DCi8SZJC_ZPeFyRpyfpAekqUwys",
    authDomain: "fir-authentication-ec3b0.firebaseapp.com",
    projectId: "fir-authentication-ec3b0",
    storageBucket: "fir-authentication-ec3b0.appspot.com",
    messagingSenderId: "19627156924",
    appId: "1:19627156924:web:5b6a928fdddada2a4c77b9"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;