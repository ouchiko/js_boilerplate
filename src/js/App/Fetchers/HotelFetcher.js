import Hotel from '../Hotels/Hotel.jsx';

class HotelFetcher
{
    constructor(hmid)
    {
        this._hmid = hmid;
        this.makeHotelRequest();
    }

    makeHotelRequest()
    {
        fetch('http://localhost/data/hotel2.json', {
        	method: 'get'
        }).then(function(response) {
            return response.json();
        }).then(function(data){
            if (data.length>0) {
                for (let i=0;i<data.length;i++){
                    new Hotel(data[i], true);
                }
            }
        }).catch(function(err) {
            console.log("Oops, issue..");
            console.log(err);
        	// Error :(
        });
    }
}

export default HotelFetcher;
