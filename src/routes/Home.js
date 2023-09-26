import { Component } from "../core";
import TextField from "../components/Textfield";
import Message from "../components/Message";
import Title from "../components/Title";

export default class Home extends Component {
  render() {
    this.el.innerHTML = /* html */ `
      <h1>메인 페이지</h1>
    `
    this.el.append(
      new TextField().el,
      new Message().el,
      new Title().el
      );
  }
}