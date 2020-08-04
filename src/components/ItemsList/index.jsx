import React, { Component } from "react";
import Item from "../Item";
import { connect, useDispatch } from "react-redux";
class ItemList extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div>
        {this.props.items.map((item, index) => (
            <Item key={index} index={index} content={item}/>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { items: state.itemList };
};


export default connect(mapStateToProps, null)(ItemList);
