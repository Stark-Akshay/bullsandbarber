import Link from 'next/link';
import { FaHome, FaUser, FaInfo } from 'react-icons/fa';
import styles from '@/styles/Home.module.css'


const BottomNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
        <Link href="/profile">
            <FaUser />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaHome />
          </Link>
        </li>
        <li>
        <Link href="/about">
            <FaInfo />
        </Link>
        </li>
  </ul>
</nav>
)
};

export default BottomNav
