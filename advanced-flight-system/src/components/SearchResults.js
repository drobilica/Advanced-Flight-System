// src/components/SearchResults.js
import React from 'react';
import moment from 'moment';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as styles from './SearchResults.module.css';

const SearchResults = ({ searchResults, handleReserve, handleWishlist, isFlightInWishlist }) => {
    return (
        <TableContainer component={Paper} className={styles.resultsContainer}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Airline</TableCell>
                        <TableCell>Departure - Arrival</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Seats Avail.</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Class</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {searchResults.map((flight, index) => (
                        <TableRow key={index}>
                            <TableCell>{flight.airline}</TableCell>
                            <TableCell>{flight.departureAirport} - {flight.arrivalAirport}</TableCell>
                            <TableCell>{moment(flight.departureTime).format('HH:mm, DD MMM YYYY')}</TableCell>
                            <TableCell>{flight.availableSeats}</TableCell>
                            <TableCell>${flight.price}</TableCell>
                            <TableCell>{flight.class}</TableCell>
                            <TableCell>
                                <Button variant="outlined" onClick={() => handleReserve(flight.id)}>Reserve</Button>
                                <Button variant="outlined" startIcon={isFlightInWishlist(flight.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />} onClick={() => handleWishlist(flight.id)}>Wishlist</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SearchResults;
