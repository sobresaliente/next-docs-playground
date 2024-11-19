import { ReactNode } from "react";
import styles from "./informationDashboard.module.css";

export default function InformationDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div style={{ display: "block" }}>
      <header className={styles.informationDashboardHeader}>
        Header of the information
      </header>
      {children}
    </div>
  );
}
