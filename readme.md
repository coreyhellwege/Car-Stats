# Notes:

## In-Memory database and JOI syntax:

api.js:

// const cars = [
//     {
//         id: 1,
//         make: "Ford",
//         model: "Mustang",
//         bodyType: "Coupe",
//         price: 74709,
//         year: 2018,
//         engine: {
//             cylinders: 8,
//             litres: 5.0,
//             horsepower: 460             
//         }
//     },
//     {
//         id: 2,
//         make: "Jaguar",
//         model: "F-Type R",
//         bodyType: "Convertible",
//         price: 276275,
//         year: 2019,
//         engine: {
//             cylinders: 8,
//             litres: 5.0,
//             horsepower: 550 
//         }, 
//         forcedInduction: {
//             type: "Supercharger"
//         }
//     },
//     {
//         id: 3,
//         make: "Porsche",
//         model: "911 Carrera",
//         bodyType: "Coupe",
//         price: 269519,
//         year: 2019,
//         engine: {
//             cylinders: 6,
//             litres: 3.8,
//             horsepower: 540
//         },
//         forcedInduction: {
//             type: "Twin-Turbo"              
//         }
//     }
// ];

app.get('/', (req, res) => {
    // select all cars from the model
    // send a response
    Cars.find({})
        .then(docs => res.send(docs));
});

app.get('/cars', (req, res) => {
    Cars.find({})
        .then(docs => res.send(docs));
});

app.get('/cars/:id', (req, res) => {
    // cobject destructuring syntax:
    const { id } = req.params;
    Cars.findOne({ id })
        .then(doc => res.send(doc));     
    // const car = cars.find(c => c.id === parseInt(id));
    // if (!car) {
    //     // Status codes: 200 success, 300 redirect, 400 user error, 500 server error
    //     return res.status(404).send('Car not found!')
    // } else
    // return res.send(car);
});

app.post('/cars', (req, res) => {
    // grab the values from the body:
    const { id, make, model, bodyType, price, year, engine } = req.body;
    // create new cars doc
    const car = new Car({ id, make, model, bodyType, price, year, engine });
    // save in MongoDB
    car.save()
        .then(doc => res.send(doc));


    // // create new car object:
    // const car = { id, make, model, bodyType, price, year, engine };
    // // validate object params:
    // const schema = {
    //     id: Joi.number().required(),
    //     make: Joi.string().required(),
    //     model: Joi.string().required(),
    //     bodyType: Joi.string().required(),
    //     price: Joi.number().required(),
    //     year: Joi.number().max(2019).required(),
    //     engine: Joi.object().keys({
    //         cylinders: Joi.number().required(),
    //         litres: Joi.number().required(),
    //         horsepower: Joi.number().required()
    //     })
    // }
    // const valid = Joi.validate(car, schema);
    // if (valid.error) {
    //     const message = valid.error.details[0].message
    //     return res.status(400).send(message);
    // }
    // // insert car into cars array:
    // cars.push(car);
    // // send back car that has been added:
    // return res.send(car);
});

// app.put('/cars/:id', (req, res) => {
//     const { id } = req.params;
//     const { id, make, model, bodyType, price, year, engine } = req.body;

// });