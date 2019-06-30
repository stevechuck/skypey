import React from 'react';
import logo from './logo.svg';
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';
import store from './store';
import _ from "lodash";

function App() {

  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
