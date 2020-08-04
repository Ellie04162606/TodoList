import React, { Component } from "react";

class Item extends Component {
  render() {
    console.log(this.props.content);
    return (
      <div>
        {/* {this.itemsList[this.state.index]} */}
        <label>{this.props.content}</label>
        <button onClick={this.onClickDelete}>×</button>
      </div>
    );
  }

  onClickDelete = () => {
    console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  };
  // map
}

export default Item;
