const {Flight} = require('../models/index') 

class FlightRepository {
    async createFlight(data)
    {
        // console.log("flight Repo: ",data);
        try{
            const flight = await Flight.create(data)
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the repository layer of flight");
            throw {error};
        }
    }
}

module.exports = FlightRepository;