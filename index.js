import express from "express";
import { pageHome } from "./pages/home.js";
import { pageAbout } from "./pages/about.js";
import { pageContactUs } from "./pages/contactUs.js";
import { pageServices } from "./pages/services.js";
import { page404 } from "./pages/404.js";

const app = express();
const port = 4811;

app.get("/", (req, res) => res.send(pageHome()));
app.get("/about", (req, res) => res.send(pageAbout()));
app.get("/contact-us", (req, res) => res.send(pageContactUs()));
app.get("/services", (req, res) => res.send(pageServices()));

app.use((req, res, next) => {
  res.status(404).send(page404());
});

app.listen(port, () => {
  console.log(`URL: http://localhost:${port}`);
});
