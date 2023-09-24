"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <svg
          className={styles.svg}
          fill="#fff"
          width="22px"
          height="22px"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M10,14 C10.5522847,14 11,14.4477153 11,15 L11,21 C11,21.5522847 10.5522847,22 10,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,15 C2,14.4477153 2.44771525,14 3,14 L10,14 Z M21,9 C21.5522847,9 22,9.44771525 22,10 L22,21 C22,21.5522847 21.5522847,22 21,22 L14,22 C13.4477153,22 13,21.5522847 13,21 L13,10 C13,9.44771525 13.4477153,9 14,9 L21,9 Z M10,2 C10.5522847,2 11,2.44771525 11,3 L11,11 C11,11.5522847 10.5522847,12 10,12 L3,12 C2.44771525,12 2,11.5522847 2,11 L2,3 C2,2.44771525 2.44771525,2 3,2 L10,2 Z M21,2 C21.5522847,2 22,2.44771525 22,3 L22,6 C22,6.55228475 21.5522847,7 21,7 L14,7 C13.4477153,7 13,6.55228475 13,6 L13,3 C13,2.44771525 13.4477153,2 14,2 L21,2 Z"
          />
        </svg>
        <Link href="/" className={styles.homeLink}>
          Admin
        </Link>
      </div>
      <div className={styles.actions}>
        <div className={styles.action}>
          <svg
            className={styles.svg}
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.action}>
          <svg
            className={styles.svg}
            width="22px"
            height="22px"
            viewBox="0 0 32 32"
            fill="#fff"
          >
            <rect x="4" y="4" width="10" height="10" />
            <rect x="4" y="18" width="10" height="10" />
            <rect x="18" y="4" width="10" height="10" />
            <rect x="18" y="18" width="10" height="10" />
          </svg>
        </div>
        <div className={styles.action}>
          <svg
            className={styles.svg}
            fill="#fff"
            width="22px"
            height="22px"
            viewBox="0 0 32 32"
          >
            <path d="M12 28.75h-8.75v-8.75c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 10c0 0.69 0.56 1.25 1.25 1.25h10c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM30 18.75c-0.69 0.001-1.249 0.56-1.25 1.25v8.75h-8.75c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h10c0.69-0.001 1.249-0.56 1.25-1.25v-10c-0.001-0.69-0.56-1.249-1.25-1.25h-0zM12 0.75h-10c-0.69 0-1.25 0.56-1.25 1.25v0 10c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-8.75h8.75c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM30 0.75h-10c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h8.75v8.75c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-10c-0-0.69-0.56-1.25-1.25-1.25h-0z" />
          </svg>
        </div>
        <div className={styles.notifications}>
          <svg
            className={styles.svg}
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.48149 9.07777C6.39886 5.86945 8.89127 3 12.1007 3V3C15.24 3 17.656 5.74275 17.5341 8.87969C17.5127 9.42969 17.5 9.97677 17.5 10.5C17.5 13.7812 21 18 21 18H3C3 18 6.5 14.7188 6.5 10.5C6.5 10.0122 6.49331 9.5369 6.48149 9.07777Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 21C10.4886 21.6132 11.2035 22 12 22C12.7965 22 13.5114 21.6132 14 21"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {user && <span className={styles.count}>1</span>}
        </div>
        {user && (
          <div className={styles.account}>
            <Image className={styles.img} src="/user.jpeg" alt="User" fill />
          </div>
        )}
        <div className={styles.cta}>
          {user ? (
            <button className={styles.ctaBtn} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className={styles.ctaBtn}>Login</button>
            </Link>
          )}
        </div>
        <div className={styles.action}>
          <svg
            className={styles.svg}
            width="22px"
            height="22px"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
