import { Component} from "../core";
import movieStore from "../store/movie";

export default class MovieList extends Component {
  constructor() {
    super({
      className: 'movie-list'
    })
    movieStore.subscribe('movies', () => {
      this.render();
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div class="movies"></div>
    `

    const moviesEl = this.el.querySelector('.movies');
    moviesEl.append(
      movieStore.state.movies.map(movie => movie.title)
    )
  }
} 