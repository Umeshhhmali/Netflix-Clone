import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDTIj3jmgMTn06LKNRt_MJAlFDxVRZTnrQ",
  authDomain: "netflix-clone-adee7.firebaseapp.com",
  projectId: "netflix-clone-adee7",
  storageBucket: "netflix-clone-adee7.firebasestorage.app",
  messagingSenderId: "285539165645",
  appId: "1:285539165645:web:6b34880e8994e030a75084"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password)
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const logout =()=>{
   signOut(auth); 
}

export {auth, db, login, signup, logout}