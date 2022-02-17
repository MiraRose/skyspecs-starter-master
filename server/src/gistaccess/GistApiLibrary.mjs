import axios from 'axios'
import fetch from "node-fetch";

export async function getGistsForUser(req, res) {
    axios.get('https://api.github.com/users/' + req.params.userName + '/gists')
     .then(response => res.json(response.data))
     .catch(err => res.send(err));
}

export function getGistByID(req, res) {
    axios.get('https://api.github.com/gists/' + req.params.gistID)
     .then(response => res.json(response.data))
     .catch(err => res.send(err));
}