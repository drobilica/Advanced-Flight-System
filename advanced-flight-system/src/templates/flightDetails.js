// src/templates/flightDetails.js
import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Paper, Typography, Box, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useUser } from '../contexts/UserContext';
import { handleWishlistToggle, isFlightInWishlist, handleReservationToggle, isFlightInReservation } from '../utils/wishlistUtils';

const FlightDetailsTemplate = ({ pageContext: { flight } }) => {
    const { user, setUser } = useUser();

    const handleWishlistClick = () => {
        handleWishlistToggle(user, setUser, flight.id);
    };

    const handleReserveClick = () => {
        handleReservationToggle(user, setUser, flight.id);
    };

    const handleCancelReservation = () => {
        const updatedReservations = user.reservations.filter(id => id !== flight.id);
        const updatedUser = { ...user, reservations: updatedReservations };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const inWishlist = isFlightInWishlist(user, flight.id);
    const isReserved = isFlightInReservation(user, flight.id);

return (
    <Layout>
        <Seo title={`Flight Details - ${flight.id}`} />
        <Box my={4} display="flex" flexDirection="column" alignItems="center">
            <Paper elevation={3} style={{ padding: '20px', maxWidth: '800px' }}>
            <Typography variant="h4" gutterBottom>
                {flight.airline} - {flight.departureAirport} to {flight.arrivalAirport}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Flight ID: {flight.id}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Departure: {flight.departureTime} | Arrival: {flight.arrivalTime}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Duration: {flight.duration} | Distance: {flight.distance}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Class: {flight.class} | Price: ${flight.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Seats Available: {flight.availableSeats}
            </Typography>

            {user && (
                <Box mt={2} display="flex" justifyContent="space-between">
                <Button
                    variant="outlined"
                    startIcon={inWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    onClick={handleWishlistClick}
                >
                    {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>

                {!isReserved ? (
                    <Button variant="contained" onClick={handleReserveClick}>
                    Reserve
                    </Button>
                ) : (
                    <Button variant="contained" color="secondary" onClick={handleCancelReservation}>
                    Cancel Reservation
                    </Button>
                )}
                </Box>
            )}

            {/* Customer Reviews */}
            <Box mt={2}>
                <Typography variant="h6">Customer Reviews</Typography>
                {flight.userReviews.map((review, index) => (
                <Box key={index} mb={1}>
                    <Typography variant="subtitle2">{`User: ${review.username}`}</Typography>
                    <Typography variant="body2">{`Rating: ${review.rating}`}</Typography>
                    <Typography variant="body2">{review.comment}</Typography>
                </Box>
                ))}
            </Box>
            </Paper>
        </Box>
        </Layout>
);  
};

export default FlightDetailsTemplate;
