import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if window is defined (i.e., running in the browser)
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, []);

    useEffect(() => {
        // Update local storage whenever the user state changes
        if (typeof window !== "undefined") {
            localStorage.setItem('user', JSON.stringify(user));
        }
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

    return { user, setUser };
};
