import styles from './Testimonials.module.css';

const testimonials = [
  {
    text: '"Zuugnu changed my freelancing game! The pre-paid gigs and escrow system gave me the security I needed to focus on my work."',
    author: 'Priya Sharma',
    role: 'Content Creator',
    initials: 'PS'
  },
  {
    text: '"The bidding feature helped me land high-paying projects. Zuugnu\'s training programs also upskilled me in social media analytics!"',
    author: 'Rahul Patel',
    role: 'Digital Marketer',
    initials: 'RP'
  },
  {
    text: '"As a small business owner, Zuugnu\'s UGC services helped me build my brand authentically and affordably."',
    author: 'Ananya Gupta',
    role: 'E-commerce Entrepreneur',
    initials: 'AG'
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>What Our Community Says</h2>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>
                  {testimonial.initials}
                </div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
