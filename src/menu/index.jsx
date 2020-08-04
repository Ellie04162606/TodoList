import React, { Component } from "react";
import { Link } from "react-router-dom";
class menu extends Component {
  render() {
    return (
      <div>
        <Link to="/"> add todo </Link>
        
        <Link to="/finished"> Done </Link>
      </div>
    );
  }
}
export default menu;
