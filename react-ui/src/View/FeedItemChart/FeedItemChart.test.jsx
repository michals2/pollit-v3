import React from "react";
import ReactDOM from "react-dom";
import FeedItemChart from "./FeedItemChart";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FeedItemChart />, div);
});
