import React from "react";
import ReactDOM from "react-dom";
import FeedItem from "./FeedItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FeedItem />, div);
});
