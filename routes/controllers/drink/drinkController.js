import { Router } from 'express';

const drinkRouter = Router();

/*
    POST Route
    @TODO
*/
drinkRouter.get('/drink', (req, res) => {
    res.send("It's Pizza Time!")
})

export default drinkRouter;