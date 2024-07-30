// "use client";

// import React from "react";
// import styles from "../styles/Footer.module.css";

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.container}>
//         <div className={styles.links}>
//           <a href="/about" className={styles.link}>
//             About Us
//           </a>
//           <a href="/contact" className={styles.link}>
//             Contact
//           </a>
//           <a href="/privacy" className={styles.link}>
//             Privacy Policy
//           </a>
//           <a href="/terms" className={styles.link}>
//             Terms of Service
//           </a>
//         </div>
//         <div className={styles.social}>
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.socialIcon}
//           >
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.socialIcon}
//           >
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.socialIcon}
//           >
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.socialIcon}
//           >
//             <i className="fab fa-linkedin-in"></i>
//           </a>
//         </div>
//         <div className={styles.copy}>
//           <p>
//             &copy; {new Date().getFullYear()} Your Company Name. All rights
//             reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";

import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/about" className={styles.link}>
            About Us
          </a>
          <a href="/contact" className={styles.link}>
            Contact
          </a>
          <a href="/privacy" className={styles.link}>
            Privacy Policy
          </a>
          <a href="/terms" className={styles.link}>
            Terms of Service
          </a>
        </div>
        <div className={styles.social}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className={styles.copy}>
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
