// src/components/layout.js

import React from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"; // Corrected import for StaticImage
import { useUser } from "../contexts/UserContext";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => {
  const { user, setUser } = useUser();

  const handleSignOut = () => {
    setUser(null); // Clear the user context
    navigate('/'); // Redirect to home page
  };

  return (
    <div className={styles.siteContainer}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <Link to="/" className={styles.logoLink}>
            <StaticImage
              src="../images/logo.png"
              alt="Advanced Flight System Logo"
              className={styles.logo}
            />
          </Link>
          <div className={styles.navItems}>
            <Link to="/flight-search" className={styles.navItem}>Flight Search</Link>
            <Link to="/my-reservations" className={styles.navItem}>My Reservations</Link>
            <Link to="/flight-journal" className={styles.navItem}>Flight Journal</Link>
            {user ? (
              <>
                <Link to="/user-profile" className={styles.navItem}>User Profile</Link>
                <button onClick={handleSignOut} className={styles.navAction}>Sign Out</button>
              </>
            ) : (
              <Link to="/login" className={styles.navAction}>Login</Link>
            )}
          </div>
        </nav>
      </header>

      <main className={styles.content}>
        {children}
      </main>

      <footer className={styles.footer}>
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
