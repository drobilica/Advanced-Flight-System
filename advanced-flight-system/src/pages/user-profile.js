import React, { useState } from "react";
import Layout from "../components/layout";
import { useUser } from "../contexts/UserContext";

const UserProfilePage = () => {
    const { user, setUser } = useUser();
    const [userInfo, setUserInfo] = useState(user || {});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(userInfo); // Update the user context
        alert("Profile updated successfully!");
        // In a real application, you would send this data to a server
    };

    return (
        <Layout>
        <h1>User Profile</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name:</label>
            <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} />
            </div>
            <div>
            <label>Email:</label>
            <input type="email" name="email" value={userInfo.email} onChange={handleInputChange} />
            </div>
            <div>
            <label>Phone:</label>
            <input type="tel" name="phone" value={userInfo.phone} onChange={handleInputChange} />
            </div>
            <div>
            <label>Favorite Airline:</label>
            <input type="text" name="favoriteAirline" value={userInfo.favoriteAirline} onChange={handleInputChange} />
            </div>
            <button type="submit">Save Changes</button>
        </form>
        </Layout>
    );
};

export default UserProfilePage;
