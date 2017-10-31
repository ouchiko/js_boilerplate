// Imports and requires.
import HotelFetcher from './App/Fetchers/HotelFetcher';

require("!style-loader!css-loader!../css/app.css");

// // We'll use some React later on as an example
// window.React = require("react");
// window.ReactDOM = require("react-dom");

// Collection of Hotels.
window.hotelCollection = [];
window.reactComponents = [];

document.addEventListener("DOMContentLoaded",function(){
    // Fetch a hotel information by ID.
    // HotelFetcher will create a new Hotel instance, attach it
    // to the hotelCollection element and render the info.
    new HotelFetcher("123456");
    new HotelFetcher("123456");

    // How does this work?
    // HotelFetcher -> Goes away and grabs some info about a hotel (demo sheet has 1..N entries)
    // HotelFetcher uses data and create new Hotel instance object.
    // Hotel object gets data, processes it however, then renders using HotelComponent.jsx.
});
