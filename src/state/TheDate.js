import React from "react";

class TheDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "foo",
      hello: "hello world",
      list: [1, 2, 3],
      obj: { nested: "object", yes: true },
      datetime: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => {
      console.log("tick");
    }, 1000);
  }

  render() {
    console.log(this.state);
    return <div>{this.state.datetime.toLocaleString()}</div>;
  }
}

export default TheDate;
