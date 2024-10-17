import { Router } from 'express';
import pizzaController from './controllers/pizza/pizzaController.js';
import drinkController from './controllers/drink/drinkController.js';

// 'router' defines the routes to be invoked using Router()
// any reqs passed to 'router' will invoke the below .use middleware for each resource
const router = Router()
    .use(pizzaController)
    .use(drinkController);

// expose the routes using Router() and giving it root URI, '/api',
// then all reqs with '/api' will be sent to 'router' above
export default Router().use('/api', router);
