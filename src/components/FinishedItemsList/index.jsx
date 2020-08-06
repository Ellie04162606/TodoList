import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "../Item";
import { MARK_ITEM, DELETE_ITEM } from "../../redux/actions/actions_type.js";
class FinishedItemsList extends Component {
  render() {
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
    dispatch({ type: DELETE_ITEM, index: inputIndex }),
  handleMark: (inputIndex) => dispatch({ type: MARK_ITEM, index: inputIndex }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishedItemsList);
