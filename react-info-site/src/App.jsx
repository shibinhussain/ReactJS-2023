import { useState } from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
