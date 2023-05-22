import { getDocs } from "firebase/firestore";
import { useAuth } from "../Auth";
import Bottombar from "./BottomNav";
import NavBartwo from "./NavBartwo";
import { adminRef } from "../firebase";
import { useState } from "react";
import NavBarthree from "./NavBarthree";
import { useRouter } from "next/router";


const Layout = ({children}) =>{
    const {currentUser} = useAuth();
    const [admin, setAdmin] = useState(false);
    const router = useRouter();
    let phones = [""];
    let notes = [];
    //checking if the email exists start
          getDocs(adminRef)
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              notes.push({...doc.data(), id:doc.id});
              notes.forEach((note) => {
              
                phones.push(note.phonenumber);
              })
            })
          })
          .then(() => {
            const found = phones.includes(currentUser.phoneNumber)
            if(found){
              setAdmin(true);
            }
          }) 
        //checking if the email exists end

        if(admin){
            return(
                <>

                    <NavBarthree/>
                    <div>
                        {children}
                    </div>
                    <Bottombar />
                </>
            )
        }
        else{
            return(
                <>
               
                    <NavBartwo />
                    <div>
                        {children}
                    </div>
                    <Bottombar />
                </>
            )
        }
           
    
};

export default Layout