const { response } = require('express');
const { CityService } = require('../services/index');

const cityService = new CityService;

// POST data -> req.body
const create = async(req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Succesfully created a city',
            err: {}
        })  
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            data: {},
            success: false,
            message: 'unable to create a city',
            err: error
        })
    }
}

// DELETE -> /city/:id
const destroy = async(req, res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Succesfully deleted a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            data: {},
            success: false,
            message: 'unable to delete the city',
            err: error
        })
    }
}


// GET -> /city/:id
const get = async(req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Succesfully fetched a city',
            err: {}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            data: {},
            success: false,
            message: 'unable to get the city',
            err: error
        })
    }
}

//PATCH -> /city/:id
const update = async(req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body );
        return res.status(200).json({
            data: city,
            success: true,
            message: 'Succesfully updated a city',
            err: {}
        }) 
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            data: {},
            success: false,
            message: 'unable to update the city',
            err: error
        })
    }
}

module.exports = {
    create, 
    destroy, 
    get, 
    update
}