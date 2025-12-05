import styles from './RecordsTable.module.css';
import Pagination from './Pagination';

export default function RecordsTable() {
  return (
    <div className={styles.recordsSection}>
      <div className={styles.recordsHeader}>
        <div className={styles.recordsCount}>
          <i className="fas fa-database"></i> 10 Records
        </div>
        <div className={styles.shortlistControls}>
          <label style={{fontSize: '13px', fontWeight: '500'}}>Shortlist:</label>
          <select>
            <option>Task*</option>
          </select>
          <select>
            <option>Status*</option>
          </select>
          <select>
            <option>Lead*</option>
          </select>
          <div className={styles.searchBox}>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>

      <table className={styles.dataTable}>
        <thead>
          <tr>
            <th style={{width: '50px'}}>
              <input type="checkbox" className={styles.checkbox} />
            </th>
            <th>Action</th>
            <th>Data</th>
            <th>Details</th>
            <th>Location</th>
            <th>Status</th>
            <th>Logs</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" className={styles.checkbox} /></td>
            <td>
              <button className={styles.tableBtn}>View</button>
              <button className={styles.tableBtn}>Edit</button>
            </td>
            <td>
              <div><strong>Source:</strong> Website</div>
              <div><strong>Score:</strong> 85</div>
              <div><strong>Task:</strong> Follow Up</div>
              <div><strong>Lead:</strong> Hot</div>
            </td>
            <td>
              <div><strong>John Doe</strong></div>
              <div>📱 +91 9876543210</div>
              <div>📧 john@example.com</div>
              <div>Type: Premium</div>
            </td>
            <td>
              <div>India</div>
              <div>Maharashtra</div>
              <div>Mumbai - 400001</div>
            </td>
            <td>
              <span className={`${styles.statusBadge} ${styles.statusActive}`}>Active</span>
              <div style={{marginTop: '5px', fontSize: '12px'}}>Follow up: Today</div>
            </td>
            <td>
              <div style={{fontSize: '12px'}}>Timeline: 15 days</div>
              <div style={{fontSize: '12px', color: '#e74c3c'}}><strong>Late:</strong> 0 days</div>
            </td>
            <td>
              <span className={styles.threeDots}>⋮</span>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" className={styles.checkbox} /></td>
            <td>
              <button className={styles.tableBtn}>View</button>
              <button className={styles.tableBtn}>Edit</button>
            </td>
            <td>
              <div><strong>Source:</strong> Referral</div>
              <div><strong>Score:</strong> 72</div>
              <div><strong>Task:</strong> Call Back</div>
              <div><strong>Lead:</strong> Warm</div>
            </td>
            <td>
              <div><strong>Sarah Smith</strong></div>
              <div>📱 +91 9988776655</div>
              <div>📧 sarah@example.com</div>
              <div>Type: Standard</div>
            </td>
            <td>
              <div>India</div>
              <div>Karnataka</div>
              <div>Bangalore - 560001</div>
            </td>
            <td>
              <span className={`${styles.statusBadge} ${styles.statusPending}`}>Pending</span>
              <div style={{marginTop: '5px', fontSize: '12px'}}>Follow up: Tomorrow</div>
            </td>
            <td>
              <div style={{fontSize: '12px'}}>Timeline: 8 days</div>
              <div style={{fontSize: '12px', color: '#27ae60'}}><strong>Late:</strong> 0 days</div>
            </td>
            <td>
              <span className={styles.threeDots}>⋮</span>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox" className={styles.checkbox} /></td>
            <td>
              <button className={styles.tableBtn}>View</button>
              <button className={styles.tableBtn}>Edit</button>
            </td>
            <td>
              <div><strong>Source:</strong> Campaign</div>
              <div><strong>Score:</strong> 45</div>
              <div><strong>Task:</strong> Meeting</div>
              <div><strong>Lead:</strong> Cold</div>
            </td>
            <td>
              <div><strong>Mike Johnson</strong></div>
              <div>📱 +91 8877665544</div>
              <div>📧 mike@example.com</div>
              <div>Type: Basic</div>
            </td>
            <td>
              <div>India</div>
              <div>Delhi</div>
              <div>New Delhi - 110001</div>
            </td>
            <td>
              <span className={`${styles.statusBadge} ${styles.statusLate}`}>Late</span>
              <div style={{marginTop: '5px', fontSize: '12px'}}>Follow up: 2 days ago</div>
            </td>
            <td>
              <div style={{fontSize: '12px'}}>Timeline: 22 days</div>
              <div style={{fontSize: '12px', color: '#e74c3c'}}><strong>Late:</strong> 2 days</div>
            </td>
            <td>
              <span className={styles.threeDots}>⋮</span>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  );
}
