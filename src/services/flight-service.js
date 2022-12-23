const {FlightRepository, AirplaneRepository} = require('../repository/index');

class FlightService{
    
    constructor(){
        this.flightRepository=new FlightRepository();
    }
    async createFlight(data){
      try{
        // console.log("service layer data enter: ",data);
        const airplane = await AirplaneRepository.getAirplane(data.airplaneId);
        const flight = await this.flightRepository.createFlight({
            ...data, totalSeats: airplane.capacity
        });
        return flight;
      }
       catch(error){
        console.log("Something went wrong at service layer");
        throw {error};
       }
    }

    async getFlightData(){
        // todo
    }
}

module.exports = FlightService