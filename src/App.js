import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import { HashRouter, Route } from "react-router-dom";
import FinishedItemsList from "./components/FinishedItemsList";
import ToDoMenu from "./Menu";
import { Layout } from "antd";

const { Header, Content } = Layout;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout style={{ width :"80%"}}>
          <HashRouter>
            <Header style={{ padding: "0 0px" }}>
              <ToDoMenu />
            </Header>
            <Content>
              <Route>
                <Route path="/" exact component={TodoList} />
                <Route path="/finished" exact component={FinishedItemsList} />
              </Route>
            </Content>
          </HashRouter>
        </Layout>
      </header>
    </div>
  );
}

export default App;
