import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Zuugnu</h3>
            <p>India&apos;s leading community-driven gig platform for pre-paid demand, bidding, and skill development.</p>
            <div className={styles.socialLinks}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#how-it-works">How It Works</Link></li>
              <li><Link href="#training">Training</Link></li>
              <li><Link href="#testimonials">Testimonials</Link></li>
              <li><Link href="#contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>For Freelancers</h3>
            <ul>
              <li><Link href="#">Browse Gigs</Link></li>
              <li><Link href="#">Bid on Assignments</Link></li>
              <li><Link href="#">Skills Training</Link></li>
              <li><Link href="#">Escrow Payments</Link></li>
              <li><Link href="#">Community Forum</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>For Businesses</h3>
            <ul>
              <li><Link href="#">Post a Gig</Link></li>
              <li><Link href="#">UGC Services</Link></li>
              <li><Link href="#">Social Media Amplification</Link></li>
              <li><Link href="#">Branding Solutions</Link></li>
              <li><Link href="#">Business Plans</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2025 Zuugnu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
