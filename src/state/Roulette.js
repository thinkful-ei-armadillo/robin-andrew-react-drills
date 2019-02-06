import React,{ Component } from 'react';

export default class Roulette extends Component{
    // constructor(prop){
    //     super(prop);
    //     bulletInChamber= 8
    // }

    state = {
        chamber: null,  
        spinningTheChamber: false
    }

handleOutput= ()=>{

}
handleClick = () => {
  this.setState({
    spinningTheChamber: !this.state.spinningTheChamber});
  let timeout = setTimeout(() => {
    const mathstuff = Math.ceil(Math.random() * 8);
    this.setState({ chamber: 1})}, 2000)
}

render() {
    const bulletInChamber = 8;
    return (
    <div>
        <p>{this.state.chamber}</p>
        <button onClick={this.handleClick}>Pull The Trigger</button>
    </div>
)

}
}