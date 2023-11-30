import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FeaturedFlights from "../components/FeaturedFlights";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";
import flightsData from "../data/featuredFlights.json";
import * as styles from "../components/index.module.css";
import { useUser } from '../contexts/UserContext';

const IndexPage = () => {
  const { user, setUser } = useUser();
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [filteredToOptions, setFilteredToOptions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (fromInput) {
      setFilteredToOptions([...new Set(flightsData.flights.filter(flight => flight.departureAirport === fromInput).map(flight => flight.arrivalAirport))].sort());
    } else {
      setFilteredToOptions([]);
    }
  }, [fromInput]);

  const handleReserve = flightId => {
    console.log("Reserved flight:", flightId);
  };

  const handleSearch = () => {
    const results = flightsData.flights.filter(flight => {
      const departureTime = new Date(flight.departureTime);
      return flight.departureAirport === fromInput &&
              flight.arrivalAirport === toInput &&
              departureTime > new Date();
    });
    setSearchResults(results);
  };

  const handleWishlist = flightId => {
    let updatedWishlist = [...(user?.wishlist || [])];
    if (updatedWishlist.includes(flightId)) {
      updatedWishlist = updatedWishlist.filter(id => id !== flightId);
    } else {
      updatedWishlist.push(flightId);
    }
    const updatedUser = { ...user, wishlist: updatedWishlist };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const isFlightInWishlist = flightId => user?.wishlist?.includes(flightId);

  return (
    <Layout>
      <Seo title="Advanced Flight System" />
      <div className={styles.hero}>
        <StaticImage src="../images/airline-banner.jpg" alt="Hero Banner" className={styles.heroBanner} />
        <SearchBox {...{ fromInput, setFromInput, toInput, setToInput, handleSearch, filteredToOptions }} />
      </div>
      <SearchResults {...{ searchResults, handleReserve, handleWishlist, isFlightInWishlist }} />
      <FeaturedFlights />
    </Layout>
  );
};

export default IndexPage;
