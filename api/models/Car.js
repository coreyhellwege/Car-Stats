const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    id: Number,
    make: String,
    model: String,
    bodyType: String,
    price: Number,
    year: Number,
    engine: {
        cylinders: Number,
        litres: Number,
        horsepower: Number             
    }
});

module.exports = mongoose.model('Car', carSchema);