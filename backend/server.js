const express = require('express')
// const cookieParser = require('cookie-parser');

const toyRoutes = require('./api/toys/toys.controller')

const cors = require('cors') 

const app = express()
const port = 3030

// Express App Configuration:
// Tell express to serve static files from the public folder
app.use(express.static('public'))
app.use(cors());
// app.use(cookieParser());

app.use(express.json())

app.use('/api/toy',toyRoutes)


app.listen(port, () => {
    console.log(`Backend ready at http://localhost:${port}`)
})