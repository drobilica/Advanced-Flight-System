import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { useUser } from "../contexts/UserContext";
import flightsData from "../data/featuredFlights.json";
import { Box, TextField, Button, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';

const UserProfilePage = () => {
    const { user, setUser } = useUser();
    const [userInfo, setUserInfo] = useState(user || {});
    const [wishlist, setWishlist] = useState(user?.wishlist || []);
    const [currentPage, setCurrentPage] = useState(1);
    const flightsPerPage = 3;

    useEffect(() => {
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
        setUser(userInfo);
        alert("Profile updated successfully!");
    };

    const handleRemoveFromWishlist = (flightId) => {
        setWishlist(wishlist.filter(id => id !== flightId));
    };

    const getFlightDetails = (flightId) => {
        return flightsData.flights.find(flight => flight.id === flightId);
    };

    const indexOfLastFlight = currentPage * flightsPerPage;
    const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
    const currentFlights = wishlist.slice(indexOfFirstFlight, indexOfLastFlight);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Layout>
            <Box my={4}>
                <Typography variant="h4" gutterBottom>User Profile</Typography>
                <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
                    <TextField 
                        fullWidth 
                        label="Name" 
                        name="name" 
                        value={userInfo.name} 
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <TextField 
                        fullWidth 
                        label="Email" 
                        name="email" 
                        value={userInfo.email} 
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <TextField 
                        fullWidth 
                        label="Phone" 
                        name="phone" 
                        value={userInfo.phone} 
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <TextField 
                        fullWidth 
                        label="Favorite Airline" 
                        name="favoriteAirline" 
                        value={userInfo.favoriteAirline} 
                        onChange={handleInputChange}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
                        Save Changes
                    </Button>
                </form>
            </Box>

            <Box my={4}>
                <Typography variant="h5" gutterBottom>My Wishlist</Typography>
                <Grid container spacing={2}>
                    {currentFlights.map(flightId => {
                        const flight = getFlightDetails(flightId);
                        return (
                            <Grid item xs={12} sm={6} md={4} key={flightId}>
                                <Paper style={{ padding: '15px' }}>
                                    <Typography variant="subtitle1">{flight.airline} - {flight.departureTime}</Typography>
                                    <Typography variant="body2">Price: ${flight.price}</Typography>
                                    <Button 
                                        variant="outlined" 
                                        color="error"
                                        onClick={() => handleRemoveFromWishlist(flightId)}
                                        style={{ marginTop: '10px' }}
                                    >
                                        Remove
                                    </Button>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>

                <Box mt={4} display="flex" justifyContent="center">
                    <List>
                        {[...Array(Math.ceil(wishlist.length / flightsPerPage)).keys()].map(number => (
                            <ListItem key={number + 1} button onClick={() => paginate(number + 1)}>
                                <ListItemText primary={number + 1} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Layout>
    );
};

export default UserProfilePage;
