// src/pages/MyReservationsPage.js
import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import SearchResults from "../components/SearchResults";
import { useUser } from '../contexts/UserContext';
import flightsData from "../data/featuredFlights.json";
import { handleWishlistToggle, isFlightInWishlist } from '../utils/wishlistUtils';

const MyReservationsPage = () => {
    const { user, setUser } = useUser();
    const reservationIds = user?.reservations || [];
    const reservationFlights = flightsData.flights.filter(flight => reservationIds.includes(flight.id));

    const handleCancelReservation = (flightId) => {
        const updatedReservations = user.reservations.filter(id => id !== flightId);
        const updatedUser = { ...user, reservations: updatedReservations };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    return (
        <Layout>
            <Seo title="My Reservations" />
            <h1>My Reservations</h1>
            <SearchResults 
                searchResults={reservationFlights} 
                handleReserve={handleCancelReservation} // Reusing handleReserve for cancel functionality
                // showButtons="cancelOnly" // Show only the cancel button
                pageType="reservation"
                isFlightInWishlist={(flightId) => isFlightInWishlist(user, flightId)}
            />
        </Layout>
    );
};

export default MyReservationsPage;
