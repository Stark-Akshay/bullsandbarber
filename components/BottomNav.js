import Link from 'next/link';
import { FaHome, FaUser, FaInfo } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'
import Person from '@mui/icons-material/Person';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';

const BottomNav = () => {
  return (


    <nav className={styles.nav}>
      <ul>
        <li>
        <Link href="/profile">
            <Person fontSize='large'/>
          </Link>
        </li>
        <li>
          <Link href="/">
          <Home fontSize='large'/>
          </Link>
        </li>
        <li>
        <Link href="/about">
            <Info fontSize='large'/>
        </Link>
        </li>
  </ul>
</nav>
)
};

export default BottomNav
