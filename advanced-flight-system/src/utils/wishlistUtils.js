// src/utils/wishlistUtils.js
export const handleWishlistToggle = (user, setUser, flightId) => {
    let updatedWishlist = [...(user?.wishlist || [])];
    if (updatedWishlist.includes(flightId)) {
        updatedWishlist = updatedWishlist.filter(id => id !== flightId);
    } else {
        updatedWishlist.push(flightId);
    }
    const updatedUser = { ...user, wishlist: updatedWishlist };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
};

export const isFlightInWishlist = (user, flightId) => {
    return user?.wishlist?.includes(flightId);
};

export const handleReservationToggle = (user, setUser, flightId) => {
    let updatedReservations = [...(user?.reservations || [])];
    if (updatedReservations.includes(flightId)) {
        updatedReservations = updatedReservations.filter(id => id !== flightId);
    } else {
        updatedReservations.push(flightId);
    }
    const updatedUser = { ...user, reservations: updatedReservations };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
};

export const isFlightInReservation = (user, flightId) => {
    return user?.reservations?.includes(flightId);
};