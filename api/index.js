import { Router } from "express";

const apiRouter = Router();

apiRouter.get("/api", (req, res) => {
  res.send("Sveiki atvyke i API puslapi...");
});

apiRouter.get("/api/sum/:num1/:num2", (req, res) => {
  const num1 = +req.params.num1;
  const num2 = +req.params.num2;
  const answer = num1 + num2;
  res.send(`${num1} + ${num2} = ${answer}`);
});

apiRouter.get("/api/minus/:num1/:num2", (req, res) => {
  const num1 = +req.params.num1;
  const num2 = +req.params.num2;
  const answer = num1 - num2;
  res.send(`${num1} - ${num2} = ${answer}`);
});

apiRouter.get("/api/multiplication/:num1/:num2", (req, res) => {
  const num1 = +req.params.num1;
  const num2 = +req.params.num2;
  const answer = num1 * num2;
  res.send(`${num1} * ${num2} = ${answer}`);
});

apiRouter.get("/api/division/:num1/:num2", (req, res) => {
  const num1 = +req.params.num1;
  const num2 = +req.params.num2;
  const answer = num1 / num2;
  res.send(`${num1} / ${num2} = ${answer}`);
});

export { apiRouter };
