import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore";


export const addPost = async (e,email,name,password,phone,role) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"))
    try {
        const docRef = await addDoc(collection(db,"posts"), {
            company: user.company,
            email: email, 
            name: name,
            password: password,
            phone: phone,
            super: role
        })
        console.log("Document written with ID: ", docRef.id)
    } catch(e){
        console.log("noob : ", e)
    }
}