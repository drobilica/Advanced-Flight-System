// src/components/layout.js

import React from "react";
import * as styles from "./layout.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {
  return (
    <div className={styles.siteContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          {/* <StaticImage
            src="../images/logo.png" // Replace with the path to your logo
            alt="Advanced Flight Systems Logo"
            className={styles.logo}
          /> */}
        </div>
        {/* Header content */}
      </header>
      
      <main className={styles.content}>
        {children}
      </main>
      
      <footer className={styles.footer}>
        {/* Footer content */}
        <p>© {new Date().getFullYear()} Dusan Stanic 2019203040 Interakcija Covek Racunar</p>
      </footer>
      
      {/* Chat icon for the virtual assistant */}
      <button className={styles.chatButton}>
        <StaticImage
          src="../images/virtual-assistant.png"
          alt="Chat with an agent"
          className={styles.chatIcon}
        />
      </button>
    </div>
  );
};

export default Layout;
