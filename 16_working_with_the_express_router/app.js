const express = require('express')
const path = require('path')
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')))

const people = require('./routes/people')

app.use('/people', people);

app.get('/', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'static', 'index.html'), 
        { 'content-type' : 'text/html' })
    })

app.listen(3000)
