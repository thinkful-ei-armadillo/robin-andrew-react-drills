import React,{ Component } from 'react';

export default class Roulette extends Component{
   static defaultProps= {
        bulletInChamber: 8
    }

    state = {
        chamber: null,  
        spinningTheChamber: false
    }

componentWillUnmount(){
    clearTimeout(this.timeout);
}

handleClick = () => {
  this.setState({
    spinningTheChamber: true});

  this.timeout= setTimeout(() =>{
    this.setState({ 
        chamber: Math.ceil(Math.random() * 8), 
        spinningTheChamber: false })}, 500)
}

renderResults(){
if(this.state.spinningTheChamber){
    return "spinning the chamber and pulling the trigger!";
} else if(this.state.chamber === this.props.bulletInChamber){
    return 'BANG!!!!'
} else {
    return 'You\'re safe'
}
}

render() {
    return (
    <div>
        <p>{this.renderResults()}</p>
        <button onClick={this.handleClick}>Pull The Trigger</button>
    </div>
)

}
}