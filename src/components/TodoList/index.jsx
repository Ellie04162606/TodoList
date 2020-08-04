import React, { Component } from "react";
import ItemsList from "../ItemsList"
import InputBox from "../InputBox"
import { connect } from "react-redux";
class TodoList extends Component {

  

  render() {
    return (
      <div>
        <InputBox addItem={this.props.addItem} />
        <ItemsList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (addItem) => dispatch({ type: "add_Item", payload: addItem }),
});
export default connect(null, mapDispatchToProps)(TodoList);
