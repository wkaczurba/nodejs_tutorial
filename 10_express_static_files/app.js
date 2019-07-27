const express = require('express')
const path = require('path')
const app = express();  // NOTE: Always remember about this one.

// THis is a static folder:
app.use('/public', 
    express.static(
        path.join(__dirname, 'static')));  // conveneience function

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})


app.listen(3000) // NOTE: ALways remember about this one.