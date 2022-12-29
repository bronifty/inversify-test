import { makeObservable, computed } from "mobx";
import { injectable, inject } from "inversify";
import { Repository } from "./Repository";

@injectable()
export class Presenter {
  @inject(Repository)
  repository;

  get viewModel() {
    return "ViewModel " + this.repository.programmersModel;
  }

  constructor() {
    makeObservable(this, {
      viewModel: computed
    });
  }
}
