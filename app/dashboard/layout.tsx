import { ReactNode } from "react";
import styles from "./dashboard.module.css";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className={styles.dashboardHeader}>
        Header of the dashboard
      </header>
      <main className={styles.dashboardMain}>
        <aside className={styles.dashboardAside}>Some info</aside>
        {children}
      </main>
    </>
  );
}
