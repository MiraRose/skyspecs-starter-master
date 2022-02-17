import React, { useEffect, useState } from "react";
import logo from "./SS.svg";
import "./App.css";

function fetchAPI(userName) {
  return fetch(`http://localhost:3010/users/${userName}`)
}

const App = () => {
  const [connected, setConnected] = useState(false);
  const [userName, setUserName] = useState('');
  const [gists, setGists] = useState([])

  function handleOnClick() {
    fetchAPI(userName)
    .then(response => response.json())
    .then((result) => {
      setGists(result)
    })
  }

  function renderGists() {
    return (
      <div>
        {gists.map(gist => <div key={gist.id}><p>Description: {gist.description}</p><p>Created at: {gist.created_at}</p></div>)}
      </div>
    )
  }

  useEffect(() => {
    const timer = setInterval(
      async () =>
        fetch("http://localhost:3010")
          .then(() => setConnected(true))
          .catch((e) => setConnected(false)),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Your Server is {connected ? "" : "not "}running</p>
        <div>
          <h1>To Retrieve Gists from Github use box below</h1>
        <label>Github Username to get Gists for: </label>
        <input type="text" onChange={ (event) => setUserName(event.target.value) } value={userName}></input>
        <button onClick={() => handleOnClick()}>Get Gists</button>
      </div>
      <div>{renderGists()}</div>
      </header>
    </div>
  );
};

export default App;
