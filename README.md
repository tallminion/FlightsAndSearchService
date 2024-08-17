# Welcome to Flights Service


## Project Setup
- clone the project on local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variables
 - `PORT = 3000`
- Inside the `src/config` folder, create a new file `config.json` and than add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "timezone": "+05:30", 
    "dialectOptions": {
      "timezone": "local"
    } 
  }
}
```
- once you've added DB config as listed above, goto src folder and execute `npx sequelize db:create`
and then execute `npx sequelize db:migrate`
```
 

 ## DB design
  - Airport Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airport but one airplane can be used in multiple flights.
  - A city has many airports but one airport belongs to acity.
  - An airport can have many flights, but a flight belongs to an airport.
  