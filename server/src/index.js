import express from "express";
import cors from "cors";
import axios from 'axios'

const PORT = 3010;

import { getGistByID, getGistsForUser } from './gistaccess/GistApiLibrary.mjs';

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to SkySpecs!");
});

app.get("/users/:userName", (req, res) => {
  getGistsForUser(req, res)
});

app.get("/gists/:gistID", (req, res) => {
  getGistByID(req, res)
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
