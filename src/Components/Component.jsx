import * as React from "react";
import { observer } from "mobx-react";
import { withInjection } from "../Core/InjectionBindings";
import { Presenter } from "./Presenter";

const Comp = observer((props) => {
  return <>{props.presenter.viewModel}</>;
});

export const Component = withInjection({
  presenter: Presenter
})(Comp);
