import styles from "./page.module.css";

export const metadata = {
  title: "Users",
  description: "List of available users",
};

const Users = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Users</span>
    </div>
  );
};

export default Users;
