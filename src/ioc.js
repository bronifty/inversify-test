import { Container } from "inversify";
import { Repository } from "./Components/Repository";

export const container = new Container({
  autoBindInjectable: true,
  defaultScope: "Transient"
});

container.bind(Repository).to(Repository).inSingletonScope();
