import Hotel from '../Hotels/Hotel.jsx';
/**
 * App > Fetchers
 * Collection of fetcher classes for obtaining remote data.
 * Constructor contains property elements to send to server.
 * Method is the fetcher and subsequent class initialiser
 */
class HotelFetcher
{
    /**
     * Define a new Hotel() instance
     *
     * @param <int> hmid
     */
    constructor(hmid)
    {
        this._hmid = hmid;
        this.makeHotelRequest();
    }

    /**
     * Makes a remote hotel request.
     * Currently using mock data.
     *
     * Generates a new Hotel() instance.
     */
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
