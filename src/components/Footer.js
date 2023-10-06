import { Component } from "../core";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/yunbiyomi/find-movie">
          GitHub Repository
        </a>
      </div>
      <div>
        <a>
          ${new Date().getFullYear()}
          YUNBIYOMI
        </a>
      </div>
    `
  }
}