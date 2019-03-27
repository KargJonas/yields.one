import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from "./components/topbar";
import Page from './components/page';

import * as serviceWorker from './serviceWorker';
import "./global.scss";

function App() {
  return (
    <div>
      <TopBar />
      <Page />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
