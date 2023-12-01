// src/components/FeaturedFlights.js
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "gatsby"; // Import Link from Gatsby
import featuredFlightsData from "../data/featuredFlights.json";
import moment from 'moment';
import { Card, CardContent, Typography, IconButton, Box, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FeaturedFlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flightsToShow = 2; 
  const totalFlights = featuredFlightsData.flights.length;

  const nextFlight = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % (totalFlights - flightsToShow + 1));
  }, [currentIndex, totalFlights, flightsToShow]);

  const prevFlight = () => {
    setCurrentIndex(prevIndex => prevIndex - 1 < 0 ? totalFlights - flightsToShow : prevIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextFlight, 5000);
    return () => clearInterval(interval);
  }, [nextFlight]);

  return (
    <Box sx={{ textAlign: 'center', my: 4 }}>
      <Typography variant="h4" gutterBottom>Featured Flights</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={prevFlight} color="primary">
          <ArrowBackIosIcon />
        </IconButton>
        <Grid container spacing={2} justifyContent="center">
          {[...Array(flightsToShow)].map((_, i) => {
            const flightIndex = (currentIndex + i) % totalFlights;
            const flight = featuredFlightsData.flights[flightIndex];
            return (
              <Grid item key={flight.id} xs={12} sm={6}>
                <Link to={`/details/${flight.id}`} style={{ textDecoration: 'none' }}> {/* Link to the flight details page */}
                  <Card raised>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {flight.airline} - {flight.departureAirport} to {flight.arrivalAirport}
                      </Typography>
                      <Typography variant="body1">Departure: {moment(flight.departureTime).format('HH:mm, DD MMMM YYYY')}</Typography>
                      <Typography variant="body1">Arrival: {moment(flight.arrivalTime).format('HH:mm, DD MMMM YYYY')}</Typography>
                      <Typography variant="body1">Duration: {flight.duration} | Distance: {flight.distance}</Typography>
                      <Typography variant="body1">Class: {flight.class} | Price: ${flight.price}</Typography>
                      <Typography variant="body1">Seats Available: {flight.availableSeats}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <IconButton onClick={nextFlight} color="primary">
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FeaturedFlights;
