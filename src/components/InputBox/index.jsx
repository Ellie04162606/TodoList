import React, { Component } from "react";

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
      this.props.addItem(this.state.inputValue);
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
