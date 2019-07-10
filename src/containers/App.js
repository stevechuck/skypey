import React from 'react';
import Main from "../components/Main"
import Sidebar from "../components/Sidebar"
import SearchBox from "../containers/SearchBox"
import './App.css';
import store from "../store"
import _ from "lodash";

const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <div>
        <SearchBox/>
        <Sidebar contacts={_.values(contacts)} />
      </div>
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};


export default App;