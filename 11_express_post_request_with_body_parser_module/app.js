const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.urlencoded({extended: false}))   // NOTE: our body parser for parsing forms


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('successfully posred data')
})

app.listen(3000) // NOTE: always remember about this one.
