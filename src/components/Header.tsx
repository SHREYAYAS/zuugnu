'use client';

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.logoZ}>Z</span>
            <span className={styles.logoU1}>u</span>
            <span className={styles.logoU2}>u</span>
            <span className={styles.logoG}>g</span>
            <span className={styles.logoN}>n</span>
            <span className={styles.logoU3}>u</span>
          </div>
          <div className={styles.logoTagline}>Discover. Decide. Shine</div>
        </div>
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
