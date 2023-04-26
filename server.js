#!/usr/bin/env node
import { rps } from "./lib/bin/rps-cli.js";
import { rpsls } from "./lib/bin/rpsls-cli.js";
import minimist from "minimist";
import express from "express";

let args = minimist(process.argv.slice(2));
let PORT = 5000;

if (args["port"]) {
  PORT = args["port"];
}

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/app", (req, res) => {
  res.status(200).send("200 OK");
});

app.get("/app/rps", (req, res) => {
  res.status(200).send(rps());
});

app.get("/app/rpsls", (req, res) => {
  res.status(200).send(rpsls());
});

app.get("/app/rps/play", (req, res) => {
  res.status(200).send(rps(req.query.shot));
});

app.get("/app/rpsls/play", (req, res) => {
  res.status(200).send(rpsls(req.query.shot));
});

app.post("/app/rps/play", (req, res) => {
  res.status(200).send(rps(req.body.shot));
});

app.post("/app/rpsls/play", (req, res) => {
  res.status(200).send(rpsls(req.body.shot));
});

app.get("/app/rps/play/:shot", (req, res) => {
  res.status(200).send(rps(req.params.shot));
});

app.get("/app/rpsls/play/:shot", (req, res) => {
  res.status(200).send(rpsls(req.params.shot));
});

// For all other undefined endpoints
app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
  });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
