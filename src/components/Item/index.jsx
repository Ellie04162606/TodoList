import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        <label
          style={{
            textDecorationLine: this.props.status ? "line-through" : "none",
          }}
          onClick={this.handleMark}
        >
          {this.props.content}
        </label>
        <button onClick={this.onClickDelete}>×</button>
      </div>
    );
  }

  handleMark = () => {
    this.props.handleMark(this.props.index);
  };

  onClickDelete = () => {
    this.props.deleteItem(this.props.index);
  };
  // map
}

export default Item;
