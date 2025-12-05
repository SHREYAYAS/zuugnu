import styles from './Filters.module.css';

export default function Filters() {
  return (
    <div className={styles.filtersSection}>
      <div className={styles.filterTitle}>
        <i className="fas fa-filter"></i> Filters
      </div>
      
      {/* Primary Filters */}
      <div className={styles.filterGrid}>
        <div className={styles.filterGroup}>
          <label>Data</label>
          <select>
            <option>All</option>
            <option>Self</option>
            <option>Team</option>
            <option>Other</option>
            <option>User</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Task</label>
          <select>
            <option>Select Task</option>
            <option>Follow Up</option>
            <option>Call Back</option>
            <option>Meeting</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Lead</label>
          <select>
            <option>Select Lead</option>
            <option>Hot</option>
            <option>Warm</option>
            <option>Cold</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Status</label>
          <select>
            <option>Select Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      {/* Date Range */}
      <div className={styles.filterGroup}>
        <label>Date Range</label>
        <div className={styles.dateRange}>
          <input type="date" placeholder="From" />
          <input type="date" placeholder="To" />
        </div>
      </div>

      {/* Location Filters */}
      <div style={{marginTop: '20px'}}>
        <div className={styles.locationFilters}>
          <div className={styles.filterGroup}>
            <label>Country</label>
            <select>
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>State</label>
            <select>
              <option>Select State</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>District</label>
            <select>
              <option>Select District</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Pin Code</label>
            <input type="text" placeholder="Enter Pin Code" />
          </div>
        </div>
      </div>

      {/* Database Filters */}
      <div className={styles.databaseFilters}>
        <div className={styles.filterGroup}>
          <label>Skills (Multiple)</label>
          <select multiple style={{height: '80px'}}>
            <option>JavaScript</option>
            <option>Python</option>
            <option>Java</option>
            <option>SQL</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Functional Area</label>
          <select>
            <option>Select Area</option>
            <option>IT</option>
            <option>Sales</option>
            <option>Marketing</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Position</label>
          <select>
            <option>Select Position</option>
            <option>Manager</option>
            <option>Developer</option>
            <option>Analyst</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Industry</label>
          <select>
            <option>Select Industry</option>
            <option>IT Services</option>
            <option>Healthcare</option>
            <option>Finance</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Education (Multiple)</label>
          <select multiple style={{height: '80px'}}>
            <option>B.Tech</option>
            <option>MBA</option>
            <option>M.Tech</option>
            <option>BCA</option>
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Institute (Multiple)</label>
          <select multiple style={{height: '80px'}}>
            <option>IIT Delhi</option>
            <option>IIM Bangalore</option>
            <option>BITS Pilani</option>
            <option>NIT Trichy</option>
          </select>
        </div>
      </div>
    </div>
  );
}
