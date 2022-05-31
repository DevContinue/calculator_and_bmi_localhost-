'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    
    const result = num1 + num2;
    
    res.send(`The result of the calculation is ${result}`);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {

    const weight = Number(req.body.weight);
    const height = Number(req.body.height);

    let result = weight / ((height / 100) ** 2);

    let subResult = result.toString();
    result = subResult.substring(0,5);


    res.send(`Your BMI is: ${result}`);

});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});