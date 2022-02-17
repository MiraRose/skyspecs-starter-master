import express from "express";
import cors from "cors";
import axios from 'axios'

const PORT = 3010;

import { getGistByID, getGistsForUser, retrieveGistsForUser } from './gistaccess/GistApiLibrary.mjs';

const app = express();
const router = express.Router()
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to SkySpecs!");
});

app.get("/users/:userName", (req, res) => {
  getGistsForUser(req, res)
});

app.get("/users/:gistID", (req, res) => {
  getGistsForUser(req, res)
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
