import Bottombar from "./BottomNav";
import NavBartwo from "./NavBartwo";
import Navbar from "./Navbar";

const Layout = ({children}) =>{
    return(
        <>
            <NavBartwo />
            <div>
                {children}
            </div>
            <Bottombar />
        </>
    )
};

export default Layout