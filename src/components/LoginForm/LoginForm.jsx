"use client";
import Link from "next/link";
import styles from "./loginForm.module.css";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/formSchema";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";

const LoginForm = () => {
  const [err, setErr] = useState(false);
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const onSubmit = async (values, action) => {
    const { email, password } = values;
    const response = await fetch(
      `/api/login?email=${email}&password=${password}`
    );
    if (response.status === 200) {
      const data = await response.json();
      setUser(data);
      localStorage.setItem("user", data.name);
      router.push("/");
      action.resetForm();
    } else {
      setErr(true);
    }
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Admin</h1>
      <h3 className={styles.subTitle}>Login</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
        </div>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>
        <button className={styles.loginBtn} type="submit">
          {isSubmitting ? "LoggingIn..." : "Login"}
        </button>
        {err && (
          <span className={styles.error} style={{ textAlign: "center" }}>
            Something went wrong!
          </span>
        )}
      </form>
      <span className={styles.or}>-OR-</span>
      <div className={styles.register}>
        <span className={styles.regText}>You don&apos;t have an account?</span>
        <Link className={styles.regLink} href="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
