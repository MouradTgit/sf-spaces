import logo from './logo.svg';
import './App.css';
import Title from './Title.js'
import POPOSList from './POPOSList';

import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button 
        onClick={() => setCount(count + 1)}
      >+</button>

      <button 
        onClick={() => setCount(count - 1)}
      >+</button>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
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

export default App;
