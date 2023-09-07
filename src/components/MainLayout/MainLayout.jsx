"use client";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./mainLayout.module.css";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      {pathname === "/login" || pathname === "/register" ? (
        children
      ) : (
        <>
          <Navbar />
          <div className={styles.content}>
            <Sidebar />
            {children}
          </div>
          <Footer />
        </>
      )}
    </main>
  );
};

export default MainLayout;
