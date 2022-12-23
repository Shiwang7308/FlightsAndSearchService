const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req,res) =>{
    try{
const flight = await flightService.createFlight(req.body);
// console.log("controller: ",req.body);
    return res.status(201).json({
        data:flight,
        success:true,
        err: {},
        messange: "Successfully created a flight"
    })
    }
    catch(error){
        console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            messange: "Not able to create a flight",
            err: error
         });
    }
}

module.exports = {
create
}