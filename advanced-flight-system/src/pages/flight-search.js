// src/pages/FlightSearchPage.js
import React, { useState } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import AdvancedSearch from "../components/AdvancedSearch";
import SearchResults from "../components/SearchResults";
import flightsData from "../data/featuredFlights.json";
import { useUser } from '../contexts/UserContext';
import { handleWishlistToggle, isFlightInWishlist } from '../utils/wishlistUtils';

const FlightSearchPage = () => {
    const { user, setUser } = useUser();
    const [searchParams, setSearchParams] = useState({
        airline: '',
        duration: '',
        distance: '',
        classType: '',
        seats: ''
    });
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const results = flightsData.flights.filter(flight => {
            return (!searchParams.airline || flight.airline === searchParams.airline) &&
                    (!searchParams.duration || flight.duration === searchParams.duration) &&
                    (!searchParams.distance || flight.distance === searchParams.distance) &&
                    (!searchParams.classType || flight.class === searchParams.classType) &&
                    (!searchParams.seats || flight.availableSeats >= parseInt(searchParams.seats));
        });
        setSearchResults(results);
    };
    const handleReserve = flightId => console.log("Reserve Flight ID:", flightId);
        
    const handleWishlist = flightId => {
        handleWishlistToggle(user, setUser, flightId);
    };


    return (
        <Layout>
            <Seo title="Flight Search" />
            <AdvancedSearch 
                flightsData={flightsData.flights} 
                searchParams={searchParams} 
                setSearchParams={setSearchParams} 
                handleSearch={handleSearch} 
            />
            <SearchResults 
                searchResults={searchResults} 
                handleReserve={handleReserve} 
                handleWishlist={handleWishlist} 
                isFlightInWishlist={(flightId) => isFlightInWishlist(user, flightId)}
            />
        </Layout>
    );
};

export default FlightSearchPage;
