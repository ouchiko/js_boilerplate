// Imports and requires.
import HotelFetcher from './App/Fetchers/HotelFetcher';

// Embedded Styling.
//require("!style-loader!css-loader!../css/app.css");

// Collection of Hotels.
window.hotelCollection = [];
window.reactComponents = [];

document.addEventListener("DOMContentLoaded",function(){
    new HotelFetcher("123456");
    new HotelFetcher("123456");

    // How does this work?
    // HotelFetcher -> Goes away and grabs some info about a hotel (demo sheet has 1..N entries)
    // HotelFetcher uses data and create new Hotel instance object.
    // Hotel object gets data, processes it however, then renders using HotelComponent.jsx.
});
