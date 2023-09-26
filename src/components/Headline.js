import { Component } from "../core";

export default class Headline extends Component {
  constructor() {
    super({
      className: 'headline'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <h1>Find Movie</h1>
    `
  }
}