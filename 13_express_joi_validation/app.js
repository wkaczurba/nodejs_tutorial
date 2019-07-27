const express = require ('express')
const bodyParser = require('body-parser')
const path = require('path')
const Joi = require('joi')

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
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });
    let x = req.body
    Joi.validate(x, schema, (err, result) => {
        if (err) {
            console.log(err)
            res.send('an error has occured')
        } else {
            console.log(result)
            res.send('successfully posted data')
        }        
    })
})

app.listen(3000) // NOTE: always remember about this one.