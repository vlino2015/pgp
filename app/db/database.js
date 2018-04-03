
// Bluebird is the best promise library available today,
// and is the one recommended here:
const promise = require('bluebird');


// pg-promise initialization options:
const initOptions = {

    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise,

    
};

// Database connection parameters:
const config = {
    host: 'localhost',
    port: 5432,
    database: 'nadiasgarden',
    user: 'postgres'
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);


// Create the database instance:
const db = pgp(config);


// $config is an object of instance of database. 
module.exports = db;