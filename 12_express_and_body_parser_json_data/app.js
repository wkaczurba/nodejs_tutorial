const express = require ('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
    console.log(req.body);
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('successfully posred data')
})

app.listen(3000) // NOTE: always remember about this one.