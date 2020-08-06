import React, { Component } from "react";
import ItemsList from "../ItemsList";
import InputBox from "../InputBox";
import { connect } from "react-redux";
import Axios from "axios";
import { ADD_ITEM, GET_ALL_ITEM } from "../../redux/actions/actions_type.js";
class TodoList extends Component {
  render() {
    return (
      <div>
        <InputBox addItem={this.props.addItem} />
        <ItemsList />
      </div>
    );
  }

  componentWillMount() {
    Axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos").then(
      (res) => {
        this.props.getAllItem(res.data);
      }
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch({ type: ADD_ITEM, payload: item }),
  getAllItem: (items) => dispatch({ type: GET_ALL_ITEM, payload: items }),
});
export default connect(null, mapDispatchToProps)(TodoList);
