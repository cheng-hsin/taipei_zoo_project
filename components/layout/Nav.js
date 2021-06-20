import Link from 'next/link';
import styles from './nav.module.scss';
import ReactDOM from 'react-dom';
import { FaSearch, FaArrowRight, FaTh, FaBars, FaTimes } from 'react-icons/fa';

export default function nav() {
  return (
    <nav className={styles.nav}>
      <a className={styles.a} href='/'>
        Home
      </a>
      <a className={styles.a} href='#'>
        🐮
      </a>
      <a className={styles.a} href='#'>
        🐪
      </a>
      <a className={styles.a} href='#'>
        🐨
      </a>
      <a className={styles.a} href='#'>
        🦩
      </a>
      <div className={`${styles.animation} ${styles['start-home']}`}></div>
    </nav>
  );
}
