import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Accordion from "./Accordion";
import sections from "./STORE";

describe("", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordion sections={sections} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the UI as expected", () => {
    const tree = renderer.create(<Accordion sections={sections} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
