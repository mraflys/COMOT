const express = require('express');
const app = express();      
const Route = require('./routes/api');           
require('dotenv').config();
var bodyParser = require('body-parser');
const PORT = process.env.PORT; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use((err, req, res, next) => {
    if(err.statusCode) {
        res.status(err.statusCode).send(err.message);
    } else {
        console.log(err);
        res.status(500).send('Something unexpected happened');
    }
});

app.get('/', (req, res) => {
    res.sendFile('views/index.html', {root: __dirname});
});

app.use(Route);

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`); 
});