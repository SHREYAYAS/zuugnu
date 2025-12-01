import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.ctaSection} id="signup">
      <div className={styles.container}>
        <h2>Ready to Start Earning?</h2>
        <p>Join Zuugnu today and unlock a world of gig opportunities, secure payments, and skill-building resources.</p>
        <Link href="#signup" className={styles.ctaButton}>Sign Up Now</Link>
      </div>
    </section>
  );
}
