import Link from 'next/link';
import { FaHome, FaUser, FaInfo } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'
import Home from '@mui/icons-material/Home';
import { LocalOffer, Settings } from '@mui/icons-material';


const BottomNav = () => {
  return (


    <nav className={styles.nav}>
      <ul>
      <li>
        <Link href="/useroffer">
            <LocalOffer fontSize='large' />
        </Link>
        </li>
        <li>
          <Link href="/">
          <Home fontSize='large'/>
          </Link>
        </li>
       
        <li>
        <Link href="/profile">
            <Settings fontSize='large' />

          </Link>
        </li>
  </ul>
</nav>
)
};

export default BottomNav
