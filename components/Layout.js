import { getDocs } from "firebase/firestore";
import { useAuth } from "../Auth";
import Bottombar from "./BottomNav";
import NavBartwo from "./NavBartwo";
import { adminRef } from "../firebase";
import { useState } from "react";
import NavBarthree from "./NavBarthree";



const Layout = ({children}) =>{
    const {currentUser} = useAuth();
    const [admin, setAdmin] = useState(false);

let emails = [""];
    let notes = [];
    //checking if the email exists start
          getDocs(adminRef)
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              notes.push({...doc.data(), id:doc.id});
              notes.forEach((note) => {
              
                emails.push(note.email);
              })
            })
          })
          .then(() => {
            const found = emails.includes(currentUser.email)
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