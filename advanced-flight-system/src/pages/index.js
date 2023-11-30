import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import FeaturedFlights from "../components/FeaturedFlights";
import flightsData from "../data/featuredFlights.json";
import * as styles from "../components/index.module.css";
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useUser } from '../contexts/UserContext';

const IndexPage = () => {
  const { user, setUser } = useUser();
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [filteredToOptions, setFilteredToOptions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Update the 'To' options based on the selected 'From' airport
    if (fromInput) {
      setFilteredToOptions(
        [...new Set(flightsData.flights
          .filter(flight => flight.departureAirport === fromInput)
          .map(flight => flight.arrivalAirport))]
          .sort()
      );
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
      {/* Hero Section */}
      <div className={styles.hero}>
        <StaticImage src="../images/airline-banner.jpg" alt="Hero Banner" className={styles.heroBanner} />
        <div className={styles.searchBox}>
          <input type="text" placeholder="From" aria-label="Departure Airport" value={fromInput} onChange={e => setFromInput(e.target.value)} className={styles.searchInput} list="from-options" />
          <datalist id="from-options">
            {[...new Set(flightsData.flights.map(flight => flight.departureAirport))].sort().map((airport, index) => <option key={index} value={airport} />)}
          </datalist>
          <input type="text" placeholder="To" aria-label="Arrival Airport" value={toInput} onChange={e => setToInput(e.target.value)} className={styles.searchInput} list="to-options" disabled={!fromInput} />
          <datalist id="to-options">
            {filteredToOptions.map((airport, index) => <option key={index} value={airport} />)}
          </datalist>
          <button onClick={handleSearch} className={styles.searchButton}>Search Flights</button>
        </div>
      </div>
      {/* Search Results Section */}
      {searchResults.length > 0 && (
        <div className={styles.resultsContainer}>
          <h2>Search Results</h2>
          {searchResults.map((flight, index) => (
            <div key={index} className={styles.resultCard}>
              <div>
                <p>{flight.airline} from {flight.departureAirport} to {flight.arrivalAirport} - {flight.departureTime}</p>
                <p>Price: ${flight.price}</p>
              </div>
              <div>
                <Button variant="outlined" onClick={() => handleReserve(flight.id)}>Reserve</Button>
                <Button variant="outlined" startIcon={isFlightInWishlist(flight.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />} onClick={() => handleWishlist(flight.id)}>Wishlist</Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Featured Flights Section */}
      <FeaturedFlights />
    </Layout>
  );
};

export default IndexPage;
