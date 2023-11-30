// src/components/SearchResults.js
import React from 'react';
import { FormattedDate, FormattedTime, FormattedMessage } from 'react-intl';
import * as styles from './SearchResults.module.css';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const SearchResults = ({ searchResults, handleReserve, handleWishlist, isFlightInWishlist }) => {
    return (
        <div className={styles.resultsContainer}>
            {searchResults.length > 0 && (
                <>
                    <h2>Search Results</h2>
                    {searchResults.map((flight, index) => (
                        <div key={index} className={styles.resultCard}>
                            <div>
                                <p>
                                    {flight.airline} from {flight.departureAirport} to {flight.arrivalAirport} -{' '}
                                    <FormattedDate value={new Date(flight.departureTime)} day="numeric" month="long" year="numeric" />,{' '}
                                    <FormattedTime value={new Date(flight.departureTime)} />,{' '}
                                    <FormattedMessage id="departureTime" values={{ time: new Date(flight.departureTime) }} />
                                </p>
                                <p>Price: ${flight.price}</p>
                            </div>
                            <div>
                                <Button variant="outlined" onClick={() => handleReserve(flight.id)}>Reserve</Button>
                                <Button variant="outlined" startIcon={isFlightInWishlist(flight.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />} onClick={() => handleWishlist(flight.id)}>Wishlist</Button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default SearchResults;
