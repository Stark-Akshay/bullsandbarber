import Bottombar from "./BottomNav";
import Navbar from "./Navbar";

const Layout = ({children}) =>{
    return(
        <>
            <Navbar />
            <div>
                {children}
            </div>
            <Bottombar />
        </>
    )
};

export default Layout