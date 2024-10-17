import { Router } from 'express';
// import service from service

// makes instance of Router for pizza resource
const pizzaRouter = Router();

// routes for pizza resource are defined below, w/ callback middleware funcs for 
// interacing w/ services that communicate w/ DB, storage, 

/*
    GET Route
    @TODO
*/
pizzaRouter.get('/pizza', (req, res) => {
    res.send('Hello World')
})

export default pizzaRouter;