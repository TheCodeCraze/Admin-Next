import styles from "./page.module.css";

export const metadata = {
  title: "Products",
  description: "List of available products",
};

const Products = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Products</span>
    </div>
  );
};

export default Products;
