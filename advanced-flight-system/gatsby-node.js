/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');
const flightsData = require('./src/data/featuredFlights.json').flights;



exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  flightsData.forEach(flights => {
    createPage({
      path: `/details/${flights.id}`,
      component: path.resolve('./src/templates/flightDetails.js'),
      context: {
        flight: flights,
      },
    });
  });
};