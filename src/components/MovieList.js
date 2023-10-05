import { Component} from "../core";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super({
      className: 'movie-list'
    })
    movieStore.subscribe('movies', () => {
      this.render();
    })
    movieStore.subscribe('loading', () => {
      this.render();
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div class="movies"></div>
      <div class="the-loader hide"></div>
    `

    const moviesEl = this.el.querySelector('.movies');
    moviesEl.append(
      ...movieStore.state.movies.map(movie => new MovieItem({movie}).el)
    )

    const loaderEl = this.el.querySelector('.the-loader');
    movieStore.state.loading 
      ? loaderEl.classList.remove('hide')
      : loaderEl.classList.add('hide');
  }
} 