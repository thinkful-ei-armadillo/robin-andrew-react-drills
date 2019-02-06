import React, {Component} from 'react';



class HelloWorld extends Component {
    state = {
        hello: 'world',
    }

    handleFriendClick = () => {
        this.setState({hello: 'friend'})
    }

    handleReactClick = () => {
        this.setState({hello: 'react'})
    }

    handleWorldClick = () => {
        this.setState({hello: 'world'})
    }

    render(){
        return (
            <div>
                <p>
                    Hello {this.state.hello}
                </p>
                <button onClick={this.handleFriendClick}>Hello Friend</button>
                <button onClick={this.handleReactClick}>Hello React</button>
                <button onClick={this.handleWorldClick}>Hello World</button>
            </div>
        )
    }
}

export default HelloWorld;