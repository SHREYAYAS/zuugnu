'use client';

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Zuugnu</div>
        <ul className={styles.navLinks}>
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#how-it-works">How It Works</Link></li>
          <li><Link href="#training">Training</Link></li>
          <li><Link href="#testimonials">Testimonials</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <Link href="#signup" className={styles.ctaButton}>Join Now</Link>
      </nav>
    </header>
  );
}
