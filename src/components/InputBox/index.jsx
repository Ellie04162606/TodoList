import React, { Component } from "react";
import Axios from "axios";
class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    // Array.filter((item, index) => action.index !==0 )
  }
  handleReInput = (event) => {
    this.setState({
      inputValue: event.target.value ? event.target.value : "",
    });
  };

  clearItemText = () => {
    this.setState({
      inputValue: "",
    });
  };

  addItemText = () => {
    if (this.state.inputValue === "") {
      alert("input should not be null");
    } else {
      // this.props.addItem(this.state.inputValue);\
      //add
      Axios.post("https://5e9ec500fb467500166c4658.mockapi.io/todos", {
        content: this.state.inputValue,
        status: false
      }).then((res) => {
        console.log(res.data);
      });
    }
    this.clearItemText();
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={this.handleReInput}
          
        ></input>
        <button onClick={this.addItemText}>add</button>
      </div>
    );
  }
}

export default InputBox;
