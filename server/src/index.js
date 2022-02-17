import express from "express";
import cors from "cors";
const PORT = 3010;

import { getGistByID, getGistsForUser } from './gistaccess/GistApiLibrary.mjs';

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to SkySpecs!");
});

app.get("/users/:userName", (req, res) => {
  let gists = getGistsForUser(req.params.userName)
  res.send(gists);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
