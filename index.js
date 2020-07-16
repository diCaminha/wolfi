const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan(('tiny')));
app.use(cors());
app.use(express.json()); //I will only accept json format data

app.use(express.static('./public')); 

//greeting endpoint
app.get('/', (req,res) => {
    res.json({
        message: 'Wolfi - ask wolfi a shorter url!'
    });
});

app.get('/:id', (req,res) => {
    //TODO: create a GET url
});

app.get('/url/:id', (req,res) => {
    //TODO: create a GET info about an url
});


app.post('/url', (req,res) => {
    //TODO: create a POST url
});

const port = process.env.PORT || 1337; 
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});