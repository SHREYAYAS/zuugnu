import styles from './CommunicationBar.module.css';

export default function CommunicationBar() {
  return (
    <div className={styles.communicationBar}>
      <button className={styles.commBtn}><i className="fas fa-phone" style={{color: '#27ae60'}}></i> Call</button>
      <button className={styles.commBtn}><i className="fab fa-whatsapp" style={{color: '#25d366'}}></i> WhatsApp</button>
      <button className={styles.commBtn}><i className="fas fa-envelope" style={{color: '#e74c3c'}}></i> Email</button>
      <button className={styles.commBtn}><i className="fas fa-user-tie" style={{color: '#9b59b6'}}></i> RCM</button>
      <button className={styles.commBtn}><i className="fas fa-handshake" style={{color: '#f39c12'}}></i> Meet</button>
      <button className={styles.commBtn}><i className="fas fa-map-marker-alt" style={{color: '#e67e22'}}></i> Visit</button>
      <button className={styles.commBtn}><i className="fas fa-file-alt" style={{color: '#3498db'}}></i> Work Report</button>
    </div>
  );
}
