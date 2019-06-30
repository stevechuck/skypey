import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./index.css";
import App from "./containers/App";
import store from "./store";
import * as serviceWorker from './serviceWorker';

const render = () => {
  fancyLog();
  return ReactDOM.render(
  				<Provider store={store}>
                  <App/>
                </Provider>
                , document.getElementById("root"));
};

render();
store.subscribe(render);
serviceWorker.unregister();

function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState());
}