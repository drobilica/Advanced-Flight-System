import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useUser } from "../contexts/UserContext";
import flightsData from "../data/featuredFlights.json"; // Assuming this is your flights data

const UserProfilePage = () => {
    const { user, setUser } = useUser();
    const [userInfo, setUserInfo] = useState(user || {});
    const [wishlist, setWishlist] = useState(user?.wishlist || []);
    const [currentPage, setCurrentPage] = useState(1);
    const flightsPerPage = 3;

    useEffect(() => {
        // Update user data in local storage when wishlist changes
        const updatedUser = { ...userInfo, wishlist };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    }, [wishlist, userInfo, setUser]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(userInfo); // Update the user context
        alert("Profile updated successfully!");
    };

    const handleRemoveFromWishlist = (flightId) => {
        setWishlist(wishlist.filter(id => id !== flightId));
    };

    // Get flight details from flights data
    const getFlightDetails = (flightId) => {
        return flightsData.flights.find(flight => flight.id === flightId);
    };

    // Pagination logic
    const indexOfLastFlight = currentPage * flightsPerPage;
    const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
    const currentFlights = wishlist.slice(indexOfFirstFlight, indexOfLastFlight);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Layout>
            <h1>User Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" name="name" value={userInfo.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" value={userInfo.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input id="phone" type="tel" name="phone" value={userInfo.phone} onChange={handleInputChange} />
                </div>
                <div>
                    <label  htmlFor="favoriteAirline">Favorite Airline:</label>
                    <input  id="favoriteAirline" type="text" name="favoriteAirline" value={userInfo.favoriteAirline} onChange={handleInputChange} />
                </div>
                <button type="submit">Save Changes</button>
            </form>

            <h2>My Wishlist</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {currentFlights.map(flightId => {
                    const flight = getFlightDetails(flightId);
                    return (
                        <div key={flightId} style={{ flex: "1 0 30%", margin: "10px" }}>
                            <p>{flight.airline} - {flight.departureTime} - ${flight.price}</p>
                            <button onClick={() => handleRemoveFromWishlist(flightId)}>Remove</button>
                        </div>
                    );
                })}
            </div>

            {/* Pagination */}
            <div>
                {[...Array(Math.ceil(wishlist.length / flightsPerPage)).keys()].map(number => (
                    <button key={number + 1} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
        </Layout>
    );
};

export default UserProfilePage;
