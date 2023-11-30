// src/pages/index.js

import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FeaturedFlights from "../components/FeaturedFlights";
import * as styles from "../components/index.module.css";

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Advanced Flight System" />

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

      {/* Featured Flights Section */}
      <FeaturedFlights />
    </Layout>
  );
};

export default IndexPage;
