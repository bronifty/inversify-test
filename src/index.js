import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Core/InjectionBindings";
import { container } from "./ioc";
import { Component } from "./Components/Component";
import { configure } from "mobx";

configure({
  enforceActions: "never",
  computedRequiresReaction: false,
  reactionRequiresObservable: false,
  observableRequiresReaction: false,
  disableErrorBoundaries: false
});

const App = (props) => {
  return (
    <div className="App">
      <Component />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider container={container}>
    <App />
  </Provider>,
  rootElement
);
