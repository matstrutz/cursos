import React from 'react';
import Header from './components/header';

import api from "./services/api"
import Main from './pages/main'

import "./index.css"

import Routes from "./router"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
