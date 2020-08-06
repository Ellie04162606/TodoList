import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
class ToDoMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="item">
          <Link to="/"> add todo </Link>
        </Menu.Item>
        <Menu.Item key="done">
          <Link to="/finished"> Done </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default ToDoMenu;
