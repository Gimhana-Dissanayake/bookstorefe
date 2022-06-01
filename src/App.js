import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import baseUrl from "./config";

function App() {
  axios(`${baseUrl}/api/v1/books`).then((books) => {
    console.log(books);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TESTING WORKFLOWS!!!
        </a>
      </header>
    </div>
  );
}

export default App;
