import React from 'react';
import ReactDOM from 'react-dom';

import HotelComponent from '../Components/HotelComponent.jsx';

/**
 * Simple Hotel Class
 */
class Hotel
{
    constructor(hoteldata, shouldRender = false)
    {
        hotelCollection.push(this);
        this.hoteldata = hoteldata;
        if (shouldRender == true) {
            this.render(this.hoteldata);
        }
    }

    get getHotelInformation()
    {
        return this.hoteldata;
    }

    render(props)
    {
        ReactDOM.render(
            <HotelComponent props={props}/>,
            document.getElementById('test')
          );
    }
}

export default Hotel;
