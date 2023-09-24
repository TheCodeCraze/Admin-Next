import Image from "next/image";
import styles from "./topDealBox.module.css";

const TopDealBox = ({ data }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Top Deal List</span>
      <div className={styles.infos}>
        {data.map((item) => {
          return (
            <div className={styles.info} key={item.id}>
              <div className={styles.imgContainer}>
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.img}
                    src={item.img}
                    alt={item.username}
                    fill
                  />
                </div>
              </div>
              <div className={styles.user}>
                <p className={styles.name}>{item.username}</p>
                <p className={styles.email}>{item.email}</p>
              </div>
              <div className={styles.amount}>${`${item.amount}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopDealBox;
