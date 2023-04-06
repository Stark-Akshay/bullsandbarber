import Link from "next/link";
import styles from "@/styles/Navbar.module.css"
import homes from "@/styles/Home.module.css"
const Navbar = () =>{

    return(
        <>
        <div className={styles.outer}>
            <div className={styles.inner}>
                <Link href="/">Home</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/about">About</Link>
            </div>
        </div>

        <div className={styles.topbar}>
            <div className={styles.topbarinner}>
                <h1 className={styles.toptext}>Bulls and Barber</h1>
            </div>
        </div>
        </>
        

        
    )
};

export default Navbar
