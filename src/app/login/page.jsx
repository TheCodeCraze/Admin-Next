import styles from "./page.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";

export const metadata = {
  title: "Login",
  description: "Login to the application",
};

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
