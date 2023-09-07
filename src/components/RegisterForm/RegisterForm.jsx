"use client";
import Link from "next/link";
import styles from "./registerForm.module.css";
import { useFormik } from "formik";
import { registerSchema } from "@/schemas/formSchema";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();

  const onSubmit = async (values, action) => {
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      router.push("/login?Kindly login to continue");
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
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Admin</h1>
      <h3 className={styles.subTitle}>Register</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.name && (
            <span className={styles.error}>{errors.name}</span>
          )}
        </div>
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
        <button className={styles.registerBtn} type="submit">
          {isSubmitting ? "Registering..." : "Register"}
        </button>
        {err && (
          <span className={styles.error} style={{ textAlign: "center" }}>
            Something went wrong!
          </span>
        )}
      </form>
      <span className={styles.or}>-OR-</span>
      <div className={styles.login}>
        <span className={styles.loginText}>You do have an account?</span>
        <Link className={styles.loginLink} href="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
