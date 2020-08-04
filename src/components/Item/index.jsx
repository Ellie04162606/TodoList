import React, { Component } from "react";
import Axios from "axios";
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
    const self = this
    Axios.put(
      "https://5e9ec500fb467500166c4658.mockapi.io/todos/" + this.props.id
    ).then((res) => {
      self.props.handleMark();
    });
  };

  onClickDelete = () => {
    const self = this
    Axios.delete("https://5e9ec500fb467500166c4658.mockapi.io/todos/"+ this.props.id,{
    }).then(
      (res) => {
                 self.props.deleteItem(self.props.id);
               }
    );
  };
}

export default Item;
