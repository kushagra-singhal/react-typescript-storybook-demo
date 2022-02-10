//setState

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     //never modify state directly use setState instead
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // ); // used when we need to execute the code after the state has been changed



    this.setState((prevState) => ({         //using the previous state not current when we need to update the state based on previous state
      
        count: prevState.count + 1
    }))



    console.log(this.state.count); //calls made are asynchronous i.e when counter is 1 console is 0
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  } //react updates multiple setstate calls into single update for better performance

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        {/* <button onClick={() => this.increment()}>Increment</button> */}
        <button onClick={() => this.incrementFive()}> IncrementFive</button>
      </div>
    );
  }
}

export default Counter;
