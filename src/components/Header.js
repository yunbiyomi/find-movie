import { Component } from "../core";

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/'
          },
          {
            name: 'Movie',
            href: '#/movie?id=109445'
          }
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render();
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
    <a href="#/" class="logo">
      <span>Find Movie</span>
    </a>
    <nav>
      <ul>
        ${this.state.menus.map(menu => {
          const href = menu.href.split('?')[0];
          const hash = location.hash.split('?')[0];
          const isActive = href === hash;
          
          return /* html */`
            <li>
              <a class="${isActive ? 'active' : '' }"
                href="${menu.href}">
                ${menu.name}
              </a>
            </li>
          `
        }).join('')}
      </ul>
    </nav>
    `
  }
}