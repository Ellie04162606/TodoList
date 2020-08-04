import React, {Component} from 'react'

class Item extends Component{

    constructor(props){
        super(props);
        this.state = {
            index: this.props.index,
        };
    }

    render(){
        console.log(this.props.content)
        return (
          <div>
            {/* {this.itemsList[this.state.index]} */}
            <label>{this.props.content}</label>
            <button>×</button>
          </div>
        );
    }

    // map

}

export default Item;