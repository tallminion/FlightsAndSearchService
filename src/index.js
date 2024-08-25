const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index');

const {Airport, City} = require('./models/index');
const { sequelize } = require("sequelize");

const db = require('./models/index');
const airport = require("./models/airport");

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }

        // const airports = await City.findAll({
        //     where: {
        //         id: 2
        //     },
        //     include: [
        //         {
        //             model: Airport
        //         }
        //     ]
        // });
        // // console.log(JSON.stringify(airports, null, 2));

        // // to find city with id =2 from City table i.e., Bangalore here 
        // const city = await City.findOne({
        //     where:{
        //         id: 2
        //     }
        // });

        // // to get airports
        // const airports = await city.getAirports();

        // to create a new airport 
        // // const newAirport = await Airport.create({
        // //     name: 'Jindal VijayNagar Airport',
        // //     cityId: 3
        // // })


        // // to find airport with cityId =3 from Airport table i.e., Jindal Vijaynagar Airport  here 
        // const newAirport = await Airport.findOne({
        //     where: {
        //         cityId: 3
        //     }
        // });

        // // Associate newAirport with city having id=2   Bangalore -> Jindal airport
        // await city.addAirport(newAirport);

        // await city.addAirport(newAirport);
        // await newAirport.destroy();

        // console.log(Airport, newAirport);
        // console.log(City, city );

        // console.log(city, airports);


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
    });
}

setupAndStartServer();