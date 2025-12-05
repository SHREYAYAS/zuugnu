import Sidebar from '../../components/dashboard/Sidebar';
import Filters from '../../components/dashboard/Filters';
import ActionBar from '../../components/dashboard/ActionBar';
import CommunicationBar from '../../components/dashboard/CommunicationBar';
import RecordsTable from '../../components/dashboard/RecordsTable';
import Pagination from '../../components/dashboard/Pagination';
import styles from './Dashboard.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>
        <div className={styles.header}>
          <h1>Dashboard</h1>
          <Filters />
        </div>
        <ActionBar />
        <CommunicationBar />
        <RecordsTable />
      </main>
    </div>
  );
}
