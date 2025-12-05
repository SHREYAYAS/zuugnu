import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>Empower Your Gig Journey with Zuugnu</h1>
        <p>Join India&apos;s fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building. Earn by creating, amplifying, and delivering value—secured by escrow, powered by trust.</p>
        <div className={styles.heroButtons}>
          <Link href="#signup" className={styles.ctaButton}>Get Started</Link>
          <Link href="#training" className={styles.ctaButtonOutline}>Explore Training</Link>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="/home.2.png" 
            alt="Zuugnu Community Illustration" 
            width={900} 
            height={450}
            priority
          />
        </div>
      </div>
    </section>
  );
}
