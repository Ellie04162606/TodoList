import React, { Component } from "react";
import Item from "../Item";
import { connect } from "react-redux";
import Axios from "axios";
class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TodoList: [],
    };
  }
  render() {
    console.log(this.props.items);
    return (
      <div>
        {this.state.TodoList
          ? this.props.items.map((item, index) => (
              <Item
                key={index}
                id={item.id}
                content={item.content}
                status={item.status}
                updateItemsList={this.componentDidMount}
                deleteItem={this.props.deleteItem}
                handleMark={this.props.handleMark}
              />
            ))
          : null}
      </div>
    );
  }

  componentWillMount() {
      const self = this
    Axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos").then(
      (res) => {
        console.log(res.data);
        for (let addData of res.data) {
            self.props.addItem(addData);
        }
      }
    );
  }
}
const mapStateToProps = (state) => {
  return { items: state.itemList };
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (addItem) => dispatch({type: "add_Item", payload: addItem}),
  deleteItem: (inputIndex) =>
    dispatch({ type: "delete_Item", index: inputIndex }),
  handleMark: (inputIndex) =>
    dispatch({ type: "mark_Item", index: inputIndex }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
