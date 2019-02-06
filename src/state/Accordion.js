import React, { Component } from "react";

export default class Accordion extends Component {
  static defaultProps = {
    sections: []
  };
  state = {
    currentClick: null
  };

  renderButtons(sections) {
    const newVar = sections.map((el, index) => {
      return (
        <li key={index} id={index}>
          <button onClick={() => this.handleButtonClick(index)}>
            {el.title}
          </button>
          {this.state.currentClick === index && <p>{el.content}</p>}
        </li>
      );
    });

    return newVar;
  }

  handleButtonClick = index => {
    this.setState({ currentClick: index });
  };

  render() {
    const { sections } = this.props;
    console.log({ sections });
    return <ul>{this.renderButtons(sections)}</ul>;
  }
}
