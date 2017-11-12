import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

// Model imports
import configureStore from "Model/store/configureStore";

// View imports
import App from "View/App/App";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
