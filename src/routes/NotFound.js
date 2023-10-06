import { Component } from "../core";

export default class NotFound extends Component {
  constructor(){
    super({
      className: 'container not-found'
    })
  }
  render(){
    this.el.innerHTML = /* html */ `
      <h1>Not Found.</h1>
    `
  }
}