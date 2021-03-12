
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port =3030;
const toyService = require('./services/toys.server.service')

// for backend &frontend
const cors = require('cors') 
app.use(cors());

// Express App Configuration:
// Tell express to serve static files from the public folder
app.use(express.static('public'))
//app.use(cookieParser());
 app.use(bodyParser.json())

app.listen(port, () => console.log(`from toy Server ready at http:// 127.0.0.1: ${port}/   -  port ${port}!`))

app.get('/', (req, res) => res.send('Hello from  /  !')) 
app.get('/nono', (req, res) => res.redirect('/a/toy')) 

// return a List Of toys
app.get('/api/toy', (req, res) =>{
    toyService.query()
     .then(bugs=>{
         console.log('bugssss',bugs)
         res.send(bugs)

     })
 
})

// example  :  http://localhost:3030/api/toy/save?txt1=aaa&txt2=bbb&txt3=ccc



// Add  a toy -  (comming from  the save in the front's service)
app.post('/api/toy', (req, res) =>{
   console.log(' post - comming from save from the front service- add new toy', req.body)
   
//    const _id  = req.body._id
   const name = req.body.name
   const price = req.body.price
   const type = req.body.type
   const createdAt = req.body.createdAt
   const inStock = req.body.inStock
   const toy = {name,price ,type,createdAt ,inStock }

    toyService.save(toy)
    .then((savedToy) => {
           res.json(savedToy)
           console.log("added toy")
        })
}) 
     // Update a toy 
app.put('/api/toy/:toyId', (req, res) =>{
       
   console.log(' post - comming from save from the front service- add new toy', req.body)

    // i can do a destraction here : 
    const _id  = req.body._id
    const name = req.body.name
    const price = req.body.price
    const type = req.body.type
    const createdAt = req.body.createdAt
    const inStock = req.body.inStock
    const toy = {_id,name,price ,type,createdAt ,inStock }
    console.log(' update a toy befor saving in server ',toy)
    toyService.save(toy)
    .then((savedToy) => {
           res.json(savedToy)
        })
        
}) 




  

// return a single toy by Id to the client
app.get('/api/toy/:toyId', (req, res) => {
    const mytoyId = req.params.toyId
    console.log('toyId',mytoyId)
    toyService.getById(mytoyId)
    .then(toy=>{
        res.send(toy)
    })
}) 


// remove toy by id
app.delete('/api/toy/:toyId', (req, res) => {

    const mytoyId = req.params.toyId
    console.log('toyId',mytoyId)
    toyService.remove(mytoyId)
    .then(toy=>{
        res.send('toy deleted')
    })
}) 

