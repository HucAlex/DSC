import express from 'express';
//const express = require('express');
import bodyParser from 'body-parser';
//const bodyParser = require('body-parser');
import usersRoutes from './routes/users.routes.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Hello from HomePage!<h1> <h2> - /users to see the students</h2>');
});

app.listen(PORT, 
    () => console.log(`Server Running on port: http://localhost:${process.env.PORT}`)
);







