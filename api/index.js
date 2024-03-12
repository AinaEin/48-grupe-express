import { Router } from "express";

const apiRouter = Router ();

apiRouter.get('/api', (req, res) => {
    res.send('Sveiki atvyke i API puslapi...')
});

export { apiRouter };