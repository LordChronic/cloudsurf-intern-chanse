import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Please don't fire me, Ryan :(
        </p>
        <a
          className="App-link"
          href="https://www.twitch.tv/lord_chronic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Drop a Follow?
        </a>
      </header>
    </div>
  );
}

export default App;
