//State --object that is privately maintained inside object

import React, { Component } from "react";

class Message extends Component {

  constructor() {               //we need to call constructor for state
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }


  changeMessage(){ 
      this.setState({
          message: 'Thank you for Subscribing'          //state can be changed within component
      })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}> Subscribe</button>
      </div>
    );
  }
}

export default Message;
