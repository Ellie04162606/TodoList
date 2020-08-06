import React, { Component } from "react";
import Item from "../Item";
import { connect } from "react-redux";
import { List } from "antd";
import { MARK_ITEM, DELETE_ITEM } from "../../redux/actions/actions_type.js";
class ItemList extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div>
        <List
          style={{ margin: "0 200px" }}
          size="large"
          bordered
          dataSource={this.props.items}
          renderItem={(item, index) => (
            <Item
              key={index}
              id={item.id}
              content={item.content}
              status={item.status}
              deleteItem={this.props.deleteItem}
              handleMark={this.props.handleMark}
            />
          )}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
