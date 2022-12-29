import "reflect-metadata";
import { makeObservable, observable } from "mobx";
import { injectable, inject } from "inversify";

@injectable()
export class Repository {
  programmersModel = "+ PM (initial)";

  constructor() {
    makeObservable(this, {
      programmersModel: observable
    });
    setTimeout(() => {
      this.programmersModel = "+ PM (updated)";
    }, 2000);
  }
}
