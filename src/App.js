import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Movies from './components/movies'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    <main className="container">
      {/* <h1>Hello World!</h1> */}
      <Movies/>
    </main>
  );
}

export default App;
