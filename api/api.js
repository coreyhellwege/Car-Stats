const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const Joi = require('joi');


// Connecting to the database:
mongoose.connect('mongodb://localhost:27017/car-stats')

// Check connection to database:
mongoose.connection.on('connected', () => {
    console.log('Connected to the database')
})

// Log error if connection failed:
mongoose.connection.on('error', () => {
    console.log('Failed to connect to the database')
})

// Connecting to the model:
const Car = require('./models/Car')

// Create 
const app = new express();

// Implementing cors
app.use(cors());

// Create the server:
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})

// This allows us to access the body of the request
app.use(express.json());


// Create paths:
app.get('/', (req, res) => {
    // select all cars from the model
    // send a response
    Car.find({})
        .then(docs => res.send(docs));
});

app.get('/cars', (req, res) => {
    Car.find({})
        .then(docs => res.send(docs));
});

app.get('/cars/:id', (req, res) => {
    // cobject destructuring syntax:
    const { id } = req.params;
    Car.findOne({ id })
        .then(doc => res.send(doc));     
});

app.get('/cars/make/:make', (req, res) => {
    // object destructuring syntax:
    const { make } = req.params;
    Car.findOne({ make })
        .then(doc => res.send(doc));     
});

app.post('/cars', (req, res) => {
    // grab the values from the body:
    const { id, make, model, bodyType, price, year, engine } = req.body;
    // create new cars doc
    const car = new Car({ id, make, model, bodyType, price, year, engine });
    // save in MongoDB
    car.save()
        .then(doc => res.send(doc));
});

app.put('/cars/:id', (req, res) => {
    // find the particular car
    const { id } = req.params;   
    const { make, model, bodyType, price, year, engine } = req.body;
    Car.findOneAndUpdate(
        // query object:
        { id },
        // new object:
        { make, model, bodyType, price, year, engine },
        // options:
        { 
            new: true,
            runValidators: true
         }
    )
        .then(newDoc => res.send(newDoc))
});

app.delete('/cars/:id', (req, res) => {
    // find the car:
    const { id } = req.params;   
    // delete the car:
    Car.findOneAndRemove({ id })
        .then(deletedDoc => res.send(deletedDoc));
});