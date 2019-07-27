// expressjs.com -- website

// npm install express --save

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/example', (req, res) => {
    res.send('hitting another route')
})


// This one is with route params and query parameters.
app.get('/example/:name/:age', (req, res) => {
    
    console.log(req.params)
    console.log(req.query)
    res.send('example with route params: ' + JSON.stringify(req.params) + "</br>" +
             'query params: ' + JSON.stringify(req.query))
})

app.listen(3000)

