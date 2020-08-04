import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "../Item";
class FinishedItemsList extends Component{
    render(){
        return (
          <div>
            {this.props.items
              .filter((item) => item.status === true)
              .map((item, index) => (
                <Item
                  key={index}
                  index={index}
                  content={item.content}
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

export default connect(mapStateToProps, mapDispatchToProps)(FinishedItemsList);