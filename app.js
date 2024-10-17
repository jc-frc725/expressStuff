// const express = require('express');
import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 3000;

app.use('/', (req, res, next) => {
    console.log(`Incoming ${req.method} from ${req.ip}`)
    next();
})

app.use(routes);

// app.get('/api/pizza', (req, res) => {
//     res.send('Hello World')
// })

app.listen(3000, () => {
    console.log(`Express listening on port ${port}`)
})