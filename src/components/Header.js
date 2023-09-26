import { Component } from "../core";

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/">메인</a>
      <a href="#/about">상세페이지</a>
    `
  }
}