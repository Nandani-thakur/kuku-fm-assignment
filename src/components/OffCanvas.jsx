"use client";

import React from "react";
import styles from "../styles/OffCanvas.module.css";

const OffCanvas = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className={styles.offCanvasWrapper}>
      <div className={styles.offCanvasContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.offCanvasHeader}>Login / Signup</h2>
        <form>
          <div className={styles.formField}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="mobile">Mobile No.</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="+91 -"
              pattern="[0-9]{10}"
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="paymentMode">Payment Mode</label>
            <select id="paymentMode" name="paymentMode" required>
              <option value="upi">UPI</option>
              <option value="netBanking">Net Banking</option>
              <option value="debitCard">Debit/Credit Card</option>
              <option value="paypal">Paypal</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Must contain 1 capital letter, 1 special symbol, and min 8 characters"
              pattern="(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
              required
            />
          </div>
          <button className={styles.offCanvasButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OffCanvas;
