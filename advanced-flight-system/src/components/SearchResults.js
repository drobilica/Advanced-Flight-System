// src/components/SearchResults.js
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, ButtonBase } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as styles from './SearchResults.module.css';

const SearchResults = ({ searchResults, handleReserve, handleWishlist, isFlightInWishlist, pageType }) => {
    const renderButtons = (flightId) => {
        switch (pageType) {
        case 'reservation':
            return (
            <Button color="error" variant="outlined" onClick={() => handleReserve(flightId)}>
                Cancel Reservation
            </Button>
            );
        case 'search':
        default:
            return (
            <>
                {/* <Button variant="outlined" onClick={() => handleReserve(flightId)}>Reserve</Button> */}
                <Button variant="outlined" startIcon={isFlightInWishlist(flightId) ? <FavoriteIcon /> : <FavoriteBorderIcon />} onClick={() => handleWishlist(flightId)}>Wishlist</Button>
            </>
            );
        }
    };

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
                <ButtonBase component={Link} to={`/details/${flight.id}`} style={{ display: 'contents' }}>
                    <TableCell>{flight.airline}</TableCell>
                    <TableCell>{flight.departureAirport} - {flight.arrivalAirport}</TableCell>
                    <TableCell>{moment(flight.departureTime).format('HH:mm, DD MMM YYYY')}</TableCell>
                    <TableCell>{flight.availableSeats}</TableCell>
                    <TableCell>${flight.price}</TableCell>
                    <TableCell>{flight.class}</TableCell>
                </ButtonBase>
                <TableCell>
                    {renderButtons(flight.id)}
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default SearchResults;
