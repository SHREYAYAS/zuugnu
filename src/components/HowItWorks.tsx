import styles from './HowItWorks.module.css';

const steps = [
  {
    icon: 'fa-search',
    title: 'Browse Gigs',
    description: 'Explore pre-paid gigs or bid on assignments that match your skills and interests.'
  },
  {
    icon: 'fa-handshake',
    title: 'Secure Agreement',
    description: 'Agree on terms with clients. Payments are held in escrow for your security.'
  },
  {
    icon: 'fa-laptop-code',
    title: 'Deliver & Earn',
    description: 'Complete the gig, submit your work, and receive payment—all through Zuugnu\'s platform.'
  },
  {
    icon: 'fa-star',
    title: 'Build Reputation',
    description: 'Earn ratings and reviews. Unlock more opportunities as you grow your Zuugnu profile.'
  }
];

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>How Zuugnu Works</h2>
        </div>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepIcon}>
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
