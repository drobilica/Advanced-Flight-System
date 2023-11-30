// src/components/SearchBox.js
import React from 'react';
import * as styles from './SearchBox.module.css'; // Create and import CSS module for SearchBox

const SearchBox = ({ fromInput, setFromInput, toInput, setToInput, handleSearch, filteredToOptions }) => {
    return (
        <div className={styles.searchBox}>
        <label htmlFor="from-airport">From:</label>
        <input
            type="text"
            placeholder="From"
            aria-label="Departure Airport"
            // id="from-airport"
            value={fromInput}
            onChange={e => setFromInput(e.target.value)}
            className={styles.searchInput}
            list="from-options"
        />
        <datalist id="from-options">
            {filteredToOptions.map((airport, index) => (
            <option key={index} value={airport} />
            ))}
        </datalist>
        <label htmlFor="to-airport">To:</label>        
        <input
            type="text"
            placeholder="To"
            aria-label="Arrival Airport"
            // id="to-airport"
            value={toInput}
            onChange={e => setToInput(e.target.value)}
            className={styles.searchInput}
            list="to-options"
            disabled={!fromInput}
        />
        <datalist id="to-options">
            {filteredToOptions.map((airport, index) => (
            <option key={index} value={airport} />
            ))}
        </datalist>
        <button onClick={handleSearch} className={styles.searchButton}>Search Flights</button>
        </div>
    );
};

export default SearchBox;
