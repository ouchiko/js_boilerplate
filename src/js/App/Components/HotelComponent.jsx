
import React from 'react';
import ReactDOM from 'react-dom';

class HotelComponent extends React.Component
{
    render() {
        let hotelInstanceCounter = hotelCollection.length;
        const children = [];

        for (var i = 0; i < hotelInstanceCounter; i += 1) {
            let hotelProps = hotelCollection[i].hoteldata;

            children.push(
                <div className="info-block" key={i}>
                    <div className="info-item name">{hotelProps.hotelName}</div>
                    <div className="info-item some">{hotelProps.stars} STARS</div>
                </div>
            );
        };

        return (
            <div className="hotelCollection" key="hc-a">
            {children}
            </div>
        );
    }
}

export default HotelComponent;
