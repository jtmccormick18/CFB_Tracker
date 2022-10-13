import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import cfb from "cfb.js";
import CFB_API from "./API/CFBdata";
var defaultClient = cfb.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "jVSoLzETmOSBOUy/hyUXq/JDIcrMhDoarPpXK/2JFyb5Tqr0Cx+xoH2a+zjZ+Yjs";

var opts = {
  conference: "SEC", // String | Conference abbreviation filter
};
const getTeams = CFB_API(opts);

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((teams) => setTeams(teams));
  }, []);

  if (!teams) return <div>LoadingTeams...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {teams.map((team, i) => (
          <div>
            <p>{i}</p>
          </div>
        ))}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
