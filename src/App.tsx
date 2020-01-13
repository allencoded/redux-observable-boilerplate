import React from 'react';
import logo from './logo.svg';
import './App.css';

import PingButton from './components/PingButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PingButton />
      </header>
    </div>
  );
}

export default App;
