import styles from './ActionBar.module.css';

export default function ActionBar() {
  return (
    <div className={styles.actionBar}>
      <button className={styles.btnPrimary}><i className="fas fa-plus"></i> Add Data</button>
      <button className={styles.btnSecondary}><i className="fas fa-bullhorn"></i> Campaign</button>
    </div>
  );
}
