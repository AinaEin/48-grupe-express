console.clear();

import express, { request } from "express";
import { PageHome } from "./pages/PageHome.js";
import { Page404 } from "./pages/Page404.js";
import { PageAbout } from "./pages/PageAbout.js";
import { PageServicesList } from "./pages/PageServicesList.js";
import { PageServiceInner } from "./pages/PageServiceInner.js";
import { PageServiceTeam } from "./pages/PageServiceTeam.js";
import { PageProjects } from "./pages/PageProjects.js";
import { helpMe } from "./pages/helpMe.js";

const app = express();
const port = 4811;

let requestCount = 0;

app.use(express.static("static"));

app.use(helpMe);

app.get("/", (req, res) => {
  const page = new PageHome();
  res.send(page.render());
});

app.get("/about", (req, res) => {
  const page = new PageAbout();
  res.send(page.render());
});

app.get("/services", (req, res) => {
  const page = new PageServicesList();
  res.send(page.render());
});

app.get("/services/:serviceId", (req, res) => {
  const page = new PageServiceInner(req.params);
  res.send(page.render());
});

app.get("/services/:serviceId/:teamService", (req, res) => {
  const page = new PageServiceTeam(req.params);
  res.send(page.render());
});


app.get("/services/:serviceId/:teamService/projects", (req, res) => {
  const page = new PageProjects(req.params);
  res.send(page.render());
});

app.use((req, res, next) => {
  const page = new Page404();
  res.status(404).send(page.render());
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`URL: http://localhost:${port}`);
});
