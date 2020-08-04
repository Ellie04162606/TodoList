import React, { Component } from "react";
import Item from "../Item";
import { connect } from "react-redux";
import Axios from "axios";
class ItemList extends Component {
    constructor(props){
        super(props)
        this.state = {
            TodoList:[]
        }
    }
  render() {
    console.log(this.props.items);
    return (
      <div>
        {/* {this.props.items.map((item, index) => (
          <Item
            key={index}
            index={index}
            content={item.content}
            status={item.status}
            deleteItem={this.props.deleteItem}
            handleMark={this.props.handleMark}
          />
        ))} */}
        {this.state.TodoList
          ? this.state.TodoList.map((item, index) => (
              <Item
                key={index}
                index={index}
                content={item.content}
                status={item.status}
                deleteItem={this.props.deleteItem}
                handleMark={this.props.handleMark}
              />
            ))
          : null}
      </div>
    );
  }

  componentDidMount(){
    Axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos").then(
      (res) => {
            console.log(res.data);
          this.setState({ TodoList: res.data });
      }
    );
  }
}
const mapStateToProps = (state) => {
  return { items: state.itemList };
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (inputIndex) =>
    dispatch({ type: "delete_Item", index: inputIndex }),
  handleMark: (inputIndex) =>
    dispatch({ type: "mark_Item", index: inputIndex }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
