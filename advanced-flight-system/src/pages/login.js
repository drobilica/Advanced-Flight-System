import React, { useState } from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import { useUser } from "../contexts/UserContext";
import userData from "../data/users.json"; // Assuming this is the path to your users data

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useUser();

    const handleLogin = (event) => {
        event.preventDefault();
        const user = userData.users.find(u => u.username === username && u.password === password);
        if (user) {
        setUser(user); // Set the logged-in user in the context
        navigate('/user-profile'); // Redirect to user profile page
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <Layout>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
            </form>
        </Layout>
    );
};

export default LoginPage;
