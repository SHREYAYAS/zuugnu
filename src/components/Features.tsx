import styles from './Features.module.css';

const features = [
  {
    icon: 'fa-hand-holding-usd',
    title: 'Pre-Paid Gigs',
    description: 'Access confirmed, pre-paid demand for services and products. No more chasing payments—just fulfill and earn.'
  },
  {
    icon: 'fa-gavel',
    title: 'Bid & Win',
    description: 'Compete for assignments based on your skills, pricing, or reputation. Win gigs that match your expertise.'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Escrow Security',
    description: 'All payments are held in escrow until gig completion. Transparent, secure, and dispute-free transactions.'
  },
  {
    icon: 'fa-users',
    title: 'Community-Driven',
    description: 'Join a thriving community of freelancers, creators, and businesses. Collaborate, learn, and grow together.'
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Skills Training',
    description: 'Upskill with certified training in UGC, SMA, and digital branding. Earn while you learn.'
  },
  {
    icon: 'fa-chart-line',
    title: 'Growth Opportunities',
    description: 'From gigs to long-term projects, Zuugnu helps you scale your income and build your brand.'
  }
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Why Choose Zuugnu?</h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
