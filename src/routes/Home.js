import { Component } from "../core";
import Headline from "../components/Headline";

export default class Home extends Component {
  render() {
    const headline = new Headline().el

    this.el.append(
      headline
    );
  }
}