import logo from "../../logo.svg";
import "../../App.css";
import {useCookies} from 'react-cookie'

function HomePage() {
  const [cookies,setCookies] = useCookies()

  console.log("perro",cookies)
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default HomePage;
