// const { response } = require('express');
const { CityService } = require('../services/index');

const cityService = new CityService();
// POST
// data -> req.body
const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            messange: "Successfully created a city",
            err: {}
        })
    } catch (error) {
         console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            messange: "Not able to create a city",
            err: error
         });
    }
}

// DELETE -> /city/:id
const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            messange: "Successfully deleted a city",
            err: {}
        })
    } catch (error) {
         console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            messange: "Not able to delete the city",
            err: error
         });
    }
}

// GET -> /city/:id
const get = async (req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            messange: "Successfully fetched a city",
            err: {}
        })
    } catch (error) {
         console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            messange: "Not able to get a city",
            err: error
         });
    }
}

// get  /city
const getAll = async (req,res) => {
    try {
        const response = await cityService.getCityAll();
        return res.status(200).json({
            data: response,
            success: true,
            messange: "Successfully fetched all cities",
            err: {}
        })
    } catch (error) {
         console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            messange: "Not able to get a city",
            err: error
         });
    }
}

// Patch  /city/:id (which city you want to update) -> req.body (parameters or data you want to update)
const update = async(req,res) => {
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: response,
            success: true,
            messange: "Successfully created a city",
            err: {}
        })
    } catch (error) {
         console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            messange: "Not able to update the city",
            err: error
         });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}