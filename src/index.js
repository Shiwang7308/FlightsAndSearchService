const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig')
const CityRepository = require('./repository/city-repository')

const setupAndStartServer = async()=>{
         
    // create the express object
   const app = express();

   // sertup middleware 
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));
   app.listen(PORT,()=>{
    
    console.log(`Server started at ${PORT}`);
    const repo = new CityRepository();
    repo.createCity({name:"New Delhi"});
    // repo.createCity({name:"New Delhi"});
    // console.log(process.env);
   });
}

setupAndStartServer();