/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
// gatsby-browser.js
import React from "react";
import { UserProvider } from "./src/contexts/UserContext";

export const wrapRootElement = ({ element }) => {
    return <UserProvider>{element}</UserProvider>;
};
