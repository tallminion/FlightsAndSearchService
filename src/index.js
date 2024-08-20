const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index');

const {Airport, City} = require('./models/index');
const { sequelize } = require("sequelize");

const db = require('./models/index');

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        const airports = await City.findAll({
            where: {
                id: 2
            },
            include: [
                {
                    model: Airport
                }
            ]
        });
        // console.log(JSON.stringify(airports, null, 2));

        db.sequelize.sync({alter: true});

        // const city = await City.findOne({
        //     where:{
        //         id: 2
        //     }
        // });
        // const airports = await city.getAirports();
        // const newAirport = await Airport.findAll({
        //     // name: "Jindal Vijayanagar Airport",
        //     // cityId: 3
        //     where: {
        //         name: "Jindal Vijayanagar Airport"
        //     }
        // });

        // await city.addAirport(newAirport);

        // // await city.addAirport({
        // //     name: 'Jindal Vijaynagar Airport'
        // // })
        
        // console.log(city, airports);

    });
}

setupAndStartServer();