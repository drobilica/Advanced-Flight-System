// src/pages/flight-journal.js
import { useEffect } from "react";
import { navigate } from "gatsby";

const FlightJournalPage = () => {
    useEffect(() => {
    navigate('/my-reservations');
    }, []);

  return null; // Render nothing or a loading spinner
};

export default FlightJournalPage;
