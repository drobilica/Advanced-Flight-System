// src/components/FeaturedFlights.js

import React, { useState, useEffect } from "react";
import * as styles from "./FeaturedFlights.module.css";
import featuredFlightsData from "../data/featuredFlights.json";

const FeaturedFlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flightsToShow = 2; // Number of flights to show at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => 
        (currentIndex + 1) % (featuredFlightsData.flights.length - flightsToShow + 1)
      );
    }, 5000); // Change flight every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className={styles.featuredFlights}>
      <h2>Featured Flights</h2>
      <div className={styles.flightsContainer}>
        {[...Array(flightsToShow)].map((_, i) => {
          const flight = featuredFlightsData.flights[currentIndex + i];
          return (
            <div key={flight.id} className={styles.flightCard}>
              <h3>{flight.airline} - {flight.departureAirport} to {flight.arrivalAirport}</h3>
              <p>Departure: {flight.departureTime} | Arrival: {flight.arrivalTime}</p>
              <p>Duration: {flight.duration} | Distance: {flight.distance}</p>
              <p>Class: {flight.class} | Price: ${flight.price}</p>
              <p>Seats Available: {flight.availableSeats}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedFlights;
