// src/components/AdvancedSearch.js
import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import * as styles from './AdvancedSearch.module.css';

const AdvancedSearch = ({ flightsData, searchParams, setSearchParams, handleSearch }) => {
    const [airlineSuggestions, setAirlineSuggestions] = useState([]);
    const [classSuggestions, setClassSuggestions] = useState([]);
    const [airportSuggestions, setAirportSuggestions] = useState([]);

    useEffect(() => {
        setAirlineSuggestions([...new Set(flightsData.map(flight => flight.airline))].sort());
        setClassSuggestions([...new Set(flightsData.map(flight => flight.class))].sort());
        setAirportSuggestions([...new Set(flightsData.map(flight => flight.departureAirport).concat(flightsData.map(flight => flight.arrivalAirport)))].sort());
    }, [flightsData]);

    const handleChange = (event) => {
        setSearchParams({ ...searchParams, [event.target.name]: event.target.value });
    };

    return (
        <div className={styles.advancedSearch}>
            {/* Airline Company */}
            <TextField
                label="Airline Company"
                name="airline"
                value={searchParams.airline}
                onChange={handleChange}
                margin="normal"
                fullWidth
                list="airline-options"
            />
            <datalist id="airline-options">
                {airlineSuggestions.map((airline, index) => (
                    <option key={index} value={airline} />
                ))}
            </datalist>

            {/* Flight Duration */}
            <TextField
                label="Flight Duration"
                name="duration"
                value={searchParams.duration}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />

            {/* Flight Distance */}
            <TextField
                label="Flight Distance"
                name="distance"
                value={searchParams.distance}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />

            {/* Departure Airport */}
            <TextField
                label="Departure Airport"
                name="departureAirport"
                value={searchParams.departureAirport}
                onChange={handleChange}
                margin="normal"
                fullWidth
                list="airport-options"
            />
            <datalist id="airport-options">
                {airportSuggestions.map((airport, index) => (
                    <option key={index} value={airport} />
                ))}
            </datalist>

            {/* Arrival Airport */}
            <TextField
                label="Arrival Airport"
                name="arrivalAirport"
                value={searchParams.arrivalAirport}
                onChange={handleChange}
                margin="normal"
                fullWidth
                list="airport-options"
            />

            {/* Flight Class */}
            <FormControl fullWidth margin="normal">
                <InputLabel>Class</InputLabel>
                <Select
                    name="classType"
                    value={searchParams.classType}
                    onChange={handleChange}
                >
                    {classSuggestions.map((classType, index) => (
                        <MenuItem key={index} value={classType}>{classType}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Number of Available Seats */}
            <TextField
                label="Available Seats"
                name="seats"
                type="number"
                value={searchParams.seats}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />

            {/* Search Button */}
            <Button variant="contained" color="primary" onClick={handleSearch} fullWidth>
                Search Flights
            </Button>
        </div>
    );
};

export default AdvancedSearch;
