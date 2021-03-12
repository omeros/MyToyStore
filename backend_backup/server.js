const express = require('express')
const cookieParser = require('cookie-parser');

const carService = require('./services/car.service')

const app = express()
const port = 3030

// Express App Configuration:
// Tell express to serve static files from the public folder
app.use(express.static('public'))
app.use(cookieParser());



app.get('/', (req, res) => {
    console.log('req.query:', req.query)
    res.send('Hello World!')
})
app.get('/puki', (req, res) => res.send('Hello Puki!'))
app.get('/nono', (req, res) => res.redirect('/puki'))


// Car API
// List Of Cars
app.get('/api/car', (req, res) => {
    var visitCount = req.cookies.visitCount || 0;
    visitCount++;
    res.cookie('visitCount', visitCount, {maxAge: 1000 * 60 * 60 * 24})

    carService.query()
        .then(cars => {
            res.json(cars)
        })
})

// Add / Update a Car
app.get('/api/car/save', (req, res) => {
    const _id = req.query._id
    const vendor = req.query.vendor
    const maxSpeed = +req.query.maxSpeed
    const car = { _id, vendor, maxSpeed }
    carService.save(car)
        .then((savedCar) => {
            console.log('Saved Car:', savedCar);
            res.json(savedCar)
        })
})

// Get a single car by id
app.get('/api/car/:carId', (req, res) => {
    const carId = req.params.carId
    carService.getById(carId)
        .then(car => {
            res.json(car)
        })
})
// remove car by id
app.get('/api/car/:carId/remove', (req, res) => {
    const carId = req.params.carId
    carService.remove(carId)
        .then(() => {
            res.json('Deleted...')
        })
})








app.listen(port, () => {
    console.log(`Backend ready at http://localhost:${port}`)
})