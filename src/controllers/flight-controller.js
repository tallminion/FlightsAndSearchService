const {FlightService} = require('../services/index');
const { ClientErrorCodes, SuccessCodes, ServerErrorCodes } = require('../utils/error-codes')


const flightService = new FlightService();

const create = async (req, res)=>{
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'succesfully created a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'unable to create a flight',
            err: error
        })
    }
}

const getAll = async (req, res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'succesfully created a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'unable to fetch the flight',
            err: error
        })
    }
}

module.exports = {
    create,
    getAll
}