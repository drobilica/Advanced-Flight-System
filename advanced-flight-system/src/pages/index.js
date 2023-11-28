// src/pages/index.js

import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Advanced Flight System" />

      {/* Navigation Bar */}
      <nav className={styles.navigation}>
        <StaticImage
          src="../images/logo.png"
          alt="Advanced Flight System Logo"
          className={styles.logo}
        />
        <div className={styles.navItems}>
          <Link to="/flight-search" className={styles.navItem}>Flight Search</Link>
          <Link to="/my-reservations" className={styles.navItem}>My Reservations</Link>
          <Link to="/flight-journal" className={styles.navItem}>Flight Journal</Link>
          <Link to="/user-profile" className={styles.navItem}>User Profile</Link>
        </div>
        <div className={styles.navActions}>
          <Link to="/login" className={styles.navAction}>Login</Link>
          {/* <Link to="/help" className={styles.navAction}>Help</Link> */}
        </div>
      </nav>

      {/* Hero Section */}
      <div className={styles.hero}>
        <StaticImage
          src="../images/airline-banner.jpg"
          alt="Hero Banner"
          className={styles.heroBanner}
        />
        <div className={styles.searchBox}>
          <input type="text" placeholder="From" className={styles.searchInput} />
          <input type="text" placeholder="To" className={styles.searchInput} />
          <button className={styles.searchButton}>Search Flights</button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
