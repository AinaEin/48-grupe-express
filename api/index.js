import { Router } from "express";
import { timeToWords }  from "../data/numbertoword.js";

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

apiRouter.get("/api/abbr/:name/:lastName", (req, res) => {
  const name = req.params.name;
  const lastName = req.params.lastName;
  const answer = name.charAt(0) + '. ' + lastName.charAt(0) + '.';
  res.send(`${name.charAt(0)} + ${lastName.charAt(0)} = ${answer}`);
});


apiRouter.get("/api/time/:hh/:mm/:ss", (req, res) => {
  const hh = +req.params.hh;
  const mm = +req.params.mm;
  const ss = +req.params.ss;
  const answer = hh + ":" + mm + ":" + ss;
  res.send(
    `${hh} + ${mm} + ${ss}= ${answer}`
  );
});

apiRouter.get("/api/time-to-text/:hh/:mm/:ss", (req, res) => {
  const hours = +req.params.hh;
  const minutes = +req.params.mm;
  const seconds = +req.params.ss;
  res.send(timeToWords(hours, minutes, seconds));
});

export { apiRouter };
