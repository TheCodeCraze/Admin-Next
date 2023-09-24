import Image from "next/image";
import styles from "./sidebar.module.css";
import { menu } from "@/lib/data";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className={styles.container}>
      {menu.map((group) => {
        return (
          <div className={styles.group} key={group.id}>
            <span className={styles.title}>{group.title}</span>
            {group.items.map((item) => {
              return item.url === "" ? (
                <div className={styles.item} key={item.id}>
                  <div className={styles.imgWrapper}>
                    <Image
                      className={styles.img}
                      fill
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <span className={styles.title}>{item.title}</span>
                </div>
              ) : (
                <Link className={styles.item} key={item.id} href={item.url}>
                  <div className={styles.imgWrapper}>
                    <Image
                      className={styles.img}
                      fill
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <span className={styles.title}>{item.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Sidebar;
