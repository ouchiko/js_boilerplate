/* React! */
import React from 'react';
import ReactDOM from 'react-dom';
/* What components do we need for a render? */
import HotelComponent from '../Components/HotelComponent.jsx';
/**
 * Hotel
 * Generates a new hotel object with data.
 * Can process and do whatever you want.
 * render() will then call in the REACT component
 */
class Hotel
{
    /**
     * Define the Hotel instance.
     *
     * @param <json> hoteldata
     * @param <bool> shouldRender = false
     */
    constructor(hoteldata, shouldRender = false)
    {
        hotelCollection.push(this);
        this.hoteldata = hoteldata;
        if (shouldRender == true) {
            this.render(this.hoteldata);
        }
    }

    /**
     * Gets the hotel information
     *
     * @return <json> hoteldata
     */
    get getHotelInformation()
    {
        return this.hoteldata;
    }

    /**
     * React render wrapper.
     *
     * @param props <need to work on this>
     */
    render(props)
    {
        ReactDOM.render(
            <HotelComponent props={props}/>,
            document.getElementById('test')
          );
    }
}

export default Hotel;
