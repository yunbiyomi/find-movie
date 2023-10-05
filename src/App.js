import { Component } from "./core";
import Header from "./components/Header";

export default class App extends Component {
  constructor() {
    super({
      className: 'container'
    })
  }
  render() {
    const routerView = document.createElement('router-view');
    this.el.append(
      // new Header().el,
      routerView
    )
  }
}