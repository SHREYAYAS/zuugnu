import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h2><span className={styles.logoSpan}>CRM</span> Dashboard</h2>
      </div>
      <nav className={styles.navMenu}>
        <a href="#" className={`${styles.navItem} ${styles.active}`}><i className="fas fa-chart-line"></i><span>Dashboard</span></a>
        <a href="#" className={styles.navItem}><i className="fas fa-database"></i><span>Data</span></a>
        <a href="#" className={styles.navItem}><i className="fas fa-tasks"></i><span>Tasks</span></a>
        <a href="#" className={styles.navItem}><i className="fas fa-users"></i><span>Leads</span></a>
        <a href="#" className={styles.navItem}><i className="fas fa-bullhorn"></i><span>Campaigns</span></a>
        <a href="#" className={styles.navItem}><i className="fas fa-chart-bar"></i><span>Reports</span></a>
        <a href="#" className={styles.navItem}><i className="fas fa-calendar-alt"></i><span>Calendar</span></a>
        <a href="#" className={styles.navItem}><i className="fas fa-file-invoice-dollar"></i><span>Invoices</span></a>
        <a href="#" className={styles.navItem}><i className="fas fa-cog"></i><span>Settings</span></a>
      </nav>
    </aside>
  );
}
