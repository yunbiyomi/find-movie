import { Component } from "../core";

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: 'a',
      className: 'movie'
    })
  }
  render() {
    const { movie } = this.props;

    this.el.setAttribute('href', `#/movie?id=${movie.id}`);
    const posturl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    this.el.style.backgroundImage = `url(${posturl})`;
    
    if (movie.release_date) {
      this.el.innerHTML = /* html */ `
        <div class="info">
          <div class="year">${movie.release_date.match(/\d{4}/)[0]}</div>
          <div class="title">${movie.title}</div>
        </div>
      `;
    } else {
      this.el.innerHTML = /* html */ `
        <div class="info">
          <div class="title">${movie.title}</div>
        </div>
      `;
    }
  }
}