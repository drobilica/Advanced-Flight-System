// src/components/FeaturedFlights.js

import React, { useState, useEffect, useCallback } from "react";
import * as styles from "./FeaturedFlights.module.css";
import featuredFlightsData from "../data/featuredFlights.json";
import moment from 'moment'; // Import Moment.js

const FeaturedFlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flightsToShow = 2; // Number of flights to show at a time
  const totalFlights = featuredFlightsData.flights.length;

  // Define nextFlight function with useCallback to memoize it
  const nextFlight = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % (totalFlights - flightsToShow + 1));
  }, [currentIndex, totalFlights, flightsToShow]);

  const prevFlight = () => {
    setCurrentIndex(prevIndex => {
      // Calculate new index
      let newIndex = prevIndex - 1;
      // If the new index is less than 0, loop back to the end
      if (newIndex < 0) {
        newIndex = totalFlights - flightsToShow;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextFlight, 5000); // Change flight every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [nextFlight]); // Include nextFlight in dependency array

  return (
    <div className={styles.featuredFlights}>
      <h2>Featured Flights</h2>
      <button onClick={prevFlight} className={styles.arrowButton}>{"<"}</button>
      <div className={styles.flightsContainer}>
        {[...Array(flightsToShow)].map((_, i) => {
          const flightIndex = (currentIndex + i) % totalFlights;
          const flight = featuredFlightsData.flights[flightIndex];
          return (
            <div key={flight.id} className={styles.flightCard}>
              <h3>{flight.airline} - {flight.departureAirport} to {flight.arrivalAirport}</h3>
              <p>Departure: {moment(flight.departureTime).format('HH:mm, DD MMMM YYYY')}</p><p> Arrival: {moment(flight.arrivalTime).format('HH:mm, DD MMMM YYYY')}</p>
              <p>Duration: {flight.duration} | Distance: {flight.distance}</p>
              <p>Class: {flight.class} | Price: ${flight.price}</p>
              <p>Seats Available: {flight.availableSeats}</p>
            </div>
          );
        })}
      </div>
      <button onClick={nextFlight} className={styles.arrowButton}>{">"}</button>
    </div>
  );
};

export default FeaturedFlights;
