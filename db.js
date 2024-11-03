const mongoose = require('mongoose');
require('dotenv').config();


// Define the MongoDB connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL  // replace 'mydatabase' with your database name

// const mongoURL = process.env.MONGODB_URL;

//set up MongoDb connection

mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB server'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Get default connection
//  Mongoose maintain a default connection object representing the MongoDb connection.
const db = mongoose.connection;

//  Define event listners for database connection

db.on('connected', () => {
    console.log('connected to mongoDb server');
});

db.on('error', () => {
    console.log('MongoDB connection error');
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;