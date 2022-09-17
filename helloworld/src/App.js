import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = ', This is Dinesh.';
  return (

    <React.Fragment >
      <h1>Testing</h1>
      < div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {name}
          </p>
          {/*Inside the curly barces we can have the varibale*/}
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

      {/*Two element tag cannot be passed from the return 
    So first mehtod:  bring all the children tag under a div parent tag
  second method:  {<React.Fragment></React.Fragment> tag}*/}
    </React.Fragment >
  );
}

export default App;
