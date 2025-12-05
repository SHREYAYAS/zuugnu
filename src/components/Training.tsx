import Link from 'next/link';
import Image from 'next/image';
import styles from './Training.module.css';

export default function Training() {
  return (
    <section className={styles.training} id="training">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Upskill with Zuugnu Academy</h2>
          <p>Boost your earning potential with certified training in UGC, SMA, and digital branding.</p>
        </div>
        <div className={styles.trainingContent}>
          <div>
            <div className={styles.trainingImage}>
              <Image 
                src="/home.png" 
                alt="Zuugnu Training Program" 
                width={600} 
                height={450}
              />
            </div>
          </div>
          <div>
            <h3>Certified Courses</h3>
            <p>From beginner to advanced, our courses are designed by industry experts to help you master in-demand skills.</p>
            <h3>Freemium Model</h3>
            <p>Start with free basic modules. Upgrade to premium certifications and mentorship for a competitive edge.</p>
            <h3>Earn While You Learn</h3>
            <p>Apply your new skills to real gigs on Zuugnu. Our training programs are designed to get you earning faster.</p>
            <Link href="#signup" className={styles.ctaButton}>Explore Courses</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
