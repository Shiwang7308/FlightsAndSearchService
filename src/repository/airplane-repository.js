// const city = require('../models/city')
const { Airplane } = require('../models/index')

async function getAirplane(id){
    try {
        const airplane = await Airplane.findByPk(id);
        return airplane;
        
    } catch (error) {
        console.log("Something went wrong in the repository level of airplane");
        throw {error};
    }
}

module.exports = {
    getAirplane
}