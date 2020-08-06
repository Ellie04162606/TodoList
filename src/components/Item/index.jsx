import React, { Component } from "react";
import { Row, Col } from "antd";
import { Switch } from "antd";
import { updateItem, deleteItem } from "../../axios/todoApi";
class Item extends Component {
  render() {
    return (
      <Row style={{ margin: "10px 0px" }}>
        <Col span={20}>
          <label
            style={{
              textDecorationLine: this.props.status ? "line-through" : "none",
            }}
            onClick={this.handleMark}
          >
            {this.props.content}
          </label>
        </Col>
        <Col span={2}>
          <Switch defaultChecked onChange={this.handleMark} />
        </Col>
        <Col span={2}>
          <button onClick={this.onClickDelete}>×</button>
        </Col>
      </Row>
    );
  }

  handleMark = async () => {
    const self = this;
    const { status, data } = await updateItem({
      id: self.props.id,
      content: self.props.content,
      status: !self.props.status,
    });
    if (status === 200) {
      self.props.handleMark(data);
    }
  };

  //todo try-catch
  onClickDelete = async () => {
    const self = this;
    const { status } = await deleteItem({
      id: self.props.id,
    });
    if (status === 200) {
      self.props.deleteItem(self.props.id);
    }
  };
}

export default Item;
