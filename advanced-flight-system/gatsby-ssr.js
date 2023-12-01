import React from "react";
import { UserProvider } from "./src/contexts/UserContext";

export const wrapRootElement = ({ element }) => {
    return <UserProvider>{element}</UserProvider>;
};
