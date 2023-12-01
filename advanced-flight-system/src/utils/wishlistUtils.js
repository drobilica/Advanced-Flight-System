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
