const {City} = require('../models/index.js')

class CityRepository{
    
    async createCity({name}) {
        try{
              const city = await City.create({
                // name:name
                name
            });
              return city;
        }
        catch(error){
            console.log("Something went wrong in the repository level")
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where: {
                    id:cityId
                }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in the repository level")
            throw {error}; 
        }
    }

    async updateCity(cityId,data){  // data => {name: "Prayagraj"}                 ----> previously {name: "Allahbad"}
             try {
                   const city = await City.update(data,{
                    where:{
                        id:cityId
                    }
                   });
             } catch (error) {
                console.log("Something went wrong in the repository level")
                throw {error}; 
             }
    }

    async getCity(cityId) {
        try {
            
            const city = await City.findByPk(cityId)
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository level")
            throw {error}; 
        }
    }
}

module.exports = CityRepository;