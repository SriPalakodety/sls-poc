import logo from './logo.svg';
import './App.css';
// import { useEffect} from 'react';

function App() {

  // useEffect(()=> {
  //   setTimeout(() => {
  //     fetch('https://lv0fj9gghf.execute-api.us-east-1.amazonaws.com/dev/get-player-score/12345')
  //                     .then(response => response.json())
  //                     .then(data => console.log(data));
  //   }, 2000);
  // });

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
          React poc via serverless
        </a>
      </header>
    </div>
  );
}

export default App;
