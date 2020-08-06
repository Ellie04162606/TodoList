import React, { Component } from "react";
import { Input, Button } from "antd";
import { Row, Col } from "antd";
import { addItem } from "../../axios/todoApi";
class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handleReInput = (event) => {
    this.setState({
      inputValue: event.target.value ? event.target.value : "",
    });
  };

  clearItemText = () => {
    this.setState({
      inputValue: "",
    });
  };

  addItemText = async () => {
    if (this.state.inputValue.trim() === "") {
      alert("input should not be null");
    } else {
      const { status, data } = await addItem({
        content: this.state.inputValue,
        status: false,
      })
      if (status === 201) {
        console.log(data);
        this.props.addItem(data);
        this.clearItemText();
      }
    }
  };

  render() {
    return (
      <Row style={{ margin: "50px 0px" }}>
        <Col offset={3} span={16}>
          <Input value={this.state.inputValue} onChange={this.handleReInput} />
        </Col>
        <Col span={2}>
          <Button
            type="primary"
            style={{ marginLeft: 8, size: 20 }}
            onClick={this.addItemText}
          >
            add
          </Button>
        </Col>
      </Row>
    );
  }
}

export default InputBox;
