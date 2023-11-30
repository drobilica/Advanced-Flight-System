import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    const { user, setUser } = context;

    useEffect(() => {
        // Update local storage whenever the user state changes
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return { user, setUser };
};
