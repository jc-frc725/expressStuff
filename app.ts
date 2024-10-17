// const express = require('express');
import express from 'express';
const app = express();
const port = 3000;

app.use('/', (req: express.Request, res: express.Response, next: express.Application) => {
    console.log(`Incoming ${req.method} from ${req.route}`)
    next();
})

app.get('/api/pizza', (req: express.Request, res: express.Response,) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log(`Express listening on port ${port}`)
})