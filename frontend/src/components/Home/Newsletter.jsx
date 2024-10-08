/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <img
          src="./images/backbanner.png"
          alt="Newsletter background"
          className={styles.backgroundImage}
        />
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Join Our Newsletter</h2>
            <p className={styles.subtitle}>
              Sign up for deals, new products and promotions
            </p>
          </div>
          <form className={styles.form}>
            <label htmlFor="email" className={styles.visuallyHidden}>
              Email address
            </label>
            <div className={styles.inputWrapper}>
              <img
                src="./images/emailbox.svg"
                alt=""
                className={styles.emailIcon}
              />
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className={styles.emailInput}
              />
            <button type="submit" className={styles.submitButton}>
              Signup
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
