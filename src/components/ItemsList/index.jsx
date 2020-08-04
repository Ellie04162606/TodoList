import React, { Component } from "react";
import Item from "../Item";
import { connect } from "react-redux";
class ItemList extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div>
        {this.props.items.map((item, index) => (
          <Item
            key={index}
            index={index}
            content ={item.content}
            status={item.status}
            deleteItem={this.props.deleteItem}
            handleMark={this.props.handleMark}
          />
        ))}
      </div>
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
