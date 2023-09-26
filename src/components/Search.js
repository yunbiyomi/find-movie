import { Component } from "../core";

export default class Search extends Component {
  constructor() {
    super({
      className: 'search'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <input placeholder="검색하고 싶은 영화의 제목을 작성해 주세요!"/>
      <button>search</button>
    `
  }
}