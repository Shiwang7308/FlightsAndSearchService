const {City} = require('../models/index.js')
const { Op } = require('sequelize');
class CityRepository{
    
    async createCity({name}) {
        console.log("from city repo",name);
        try{
              const city = await City.create({
                // name:name
                name:name
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
               // below apporach also works but will not return updated object 
               // if you are using Pgsql then returning: true can be used,else not
                //    const city = await City.update(data,{
                //     where:{
                //         id:cityId
                //     },
                //     returning : true,
                //     plain: true
                //    });
                // for getting updated data in mysql we use the below approach
                const city = await City.findByPk(cityId);
                console.log(city);
                city.name=data.name;
                await city.save();
                return city;

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

    async getCityAll(filter) {
        try {
            
            if(filter.name)
            {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
            // else
            // {
            //     const city = await City.findAll();
            //     return city;
            // }
            
        } catch (error) {
            console.log("Something went wrong in the repository level")
            throw {error}; 
        }
    }
}

module.exports = CityRepository;