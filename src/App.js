import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import { HashRouter, Route } from "react-router-dom";
import FinishedItemsList from "./components/FinishedItemsList";
import Menu from "./menu"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Menu />
          <Route>
            <Route path="/" exact component={TodoList} />
            <Route path="/finished" exact component={FinishedItemsList} />
          </Route>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
