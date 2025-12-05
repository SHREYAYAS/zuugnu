import styles from './Pagination.module.css';

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationInfo}>1 out of 200 data</div>
      <div className={styles.paginationControls}>
        <button className={styles.pageBtn}>«</button>
        <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
        <button className={styles.pageBtn}>2</button>
        <button className={styles.pageBtn}>3</button>
        <button className={styles.pageBtn}>4</button>
        <button className={styles.pageBtn}>5</button>
        <button className={styles.pageBtn}>»</button>
      </div>
    </div>
  );
}
