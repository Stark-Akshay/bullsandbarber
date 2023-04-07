import Link from 'next/link';
import { FaHome, FaUser, FaInfo } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'


const BottomNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
        <Link href="/profile">
            <FaUser size={25}/>
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaHome size={25}/>
          </Link>
        </li>
        <li>
        <Link href="/about">
            <FaInfo size={25}/>
        </Link>
        </li>
  </ul>
</nav>
)
};

export default BottomNav
