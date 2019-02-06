import React, { Component } from "react";

class Bomb extends Component {
  state = {
    count: 0
  }; 
  interval = null;
 
  componentDidMount() {
    this.inverval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  handleTickDisplay = () => {
    if (this.state.count === 8) {
      clearInterval(this.interval)
      return "BOOM!";
    } else if(this.state.count === 9){
      this.setState({
        count: 0
      })
    } 
    else if (this.state.count % 2 === 0) {
      return "tick";
    } else if (this.state.count % 2 !== 0) {
      return "tock";
    }
  };

  render() {
    return (
      <div>
        <p>{this.handleTickDisplay()}</p>
      </div>
    );
  }
}

export default Bomb;
