import styles from "./page.module.css";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

export const metadata = {
  title: "Register",
  description: "Register new user",
};

const Register = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default Register;
