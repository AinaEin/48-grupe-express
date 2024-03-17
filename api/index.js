import { Router } from "express";
import { timeToWords }  from "../data/numbertoword.js";
import { formatTimeNumber } from "../lib/formatTimeNumbers.js";
import { formatTimeAsText, timeValueTitle } from "../lib/formatTimeAsText.js";
import { lastLetter } from "../lib/formatNameEnding.js";

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
  const answer = (
    name.charAt(0) +
    ". " +
    lastName.charAt(0) +
    "."
  ).toUpperCase();
  res.send(`${name.charAt(0)} + ${lastName.charAt(0)} = ${answer}`);
});


// apiRouter.get("/api/time/:hh/:mm/:ss", (req, res) => {
//   const hh = +req.params.hh;
//   const mm = +req.params.mm;
//   const ss = +req.params.ss;
//   const answer = hh + ":" + mm + ":" + ss;
//   res.send(
//     `${hh} + ${mm} + ${ss}= ${answer}`
//   );
// });

apiRouter.get("/api/time-to-text/:hh/:mm/:ss", (req, res) => {
  const hours = +req.params.hh;
  const minutes = +req.params.mm;
  const seconds = +req.params.ss;
  res.send(timeToWords(hours, minutes, seconds));
});

apiRouter.get('/api/customer-welcome/:name', (req, res) => {
  const name = req.params.name;
  console.log(name);
  const newName = lastLetter(name);
  console.log(newName);
  res.status(400).send('Sveiki, ' + newName);
})


apiRouter.get("/api/math/:veiksmas", (req, res) => {
  const mathFunc = req.params.veiksmas;
  if (
    mathFunc !== "suma" &&
    mathFunc !== "atimtis" &&
    mathFunc !== "daugyba" &&
    mathFunc !== "dalyba"
  ) {
    return res.send("Norima atlikti funkcija yra neatpazinta");
  }
  return res.send("Norint susumuoti, reikia nurodyti 2 skaicius");
});

apiRouter.get("/api/math/:veiksmas/:pirmas", (req, res) => {
  return res.send("Norint susumuoti, dar truksta vieno skaiciaus");
});

apiRouter.get("/api/math/:veiksmas/:a/:b", (req, res) => {
  const a = +req.params.a;
  const b = +req.params.b;

  if (isNaN(a)) {
    return res.send(`Pirmas parametras nera tikras skaicius`);
  }
  if (isNaN(b)) {
    return res.send(`Antras parametras nera tikras skaicius`);
  }

  const sum = +(a + b).toFixed(10);
  return res.send(`${a}+${b}=${sum}`);
});

// Reikia priimti varda ir pavarde, ir graziname inicialus.
// /api/abbr/chuck/norris => C.N.
apiRouter.get("/api/abbr", (req, res) => {
  return res
    .status(400)
    .send("Norint pagaminti inicalus reikia nurodyti varda ir pavarde");
});
apiRouter.get("/api/abbr/:name", (req, res) => {
  return res
    .status(400)
    .send(
      "Norint pagaminti inicalus reikia nurodyti ne tik varda bet ir pavarde"
    );
});
apiRouter.get("/api/abbr/:firstname/:lastname", (req, res) => {
  const firstname = req.params.firstname.trim();
  const lastname = req.params.lastname.trim();

  if (firstname.length === 0) {
    return res.status(400).send("Vardas negali buti tuscias");
  }
  if (lastname.length === 0) {
    return res.status(400).send("Pavarde negali buti tuscia");
  }

  const abbr = (firstname[0] + "." + lastname[0] + ".").toUpperCase();
  return res.status(200).send(abbr);
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas: hh:mm:ss
apiRouter.get("/api/time", (req, res) => {
  const d = new Date();
  const h = formatTimeNumber(d.getHours());
  const m = formatTimeNumber(d.getMinutes());
  const s = formatTimeNumber(d.getSeconds());

  const time = `${h}:${m}:${s}`;
  return res.status(200).send(time);
});

// Kreipiantis konkreciai i toli URL yra grazinamas laikas tokiu formatu hh:mm:ss, bet visi skaiciai yra zodziai
// pvz.: 10:57:14 => desimt valandu, penkiasdesimt septynios minutes, keturiolika sekundziu
// pasistenkti apgalvoti visas galimas gramatikos situacijas
apiRouter.get("/api/time-as-text", (req, res) => {
  const d = new Date();

  const h = formatTimeAsText(d.getHours());
  const m = formatTimeAsText(d.getMinutes());
  const s = formatTimeAsText(d.getSeconds());

  const ht = timeValueTitle(d.getHours(), "h");
  const mt = timeValueTitle(d.getMinutes(), "m");
  const st = timeValueTitle(d.getSeconds(), "s");

  const time = `${h} ${ht}, ${m} ${mt}, ${s} ${st}`;
  return res.status(200).send(time);
});


export { apiRouter };
