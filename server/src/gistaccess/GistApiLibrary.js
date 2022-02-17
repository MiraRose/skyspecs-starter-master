import 'axios'

export function getGistsForUser(username) {
    let response = axios('https://api.github.com/users/' + username + '/gists');
    return response.data
}

export function getGistByID(id) {
    let response = axios('https://api.github.com/gists/' + id);
    return response.data
}