import { Component} from "../core";
import movieStore, { getMovieDetails } from "../store/movie";

export default class Movie extends Component {
  constructor() {
    super({
      className: 'container the-movie'
    })
  }
  async render() {
    await getMovieDetails(history.state.id);
    console.log(movieStore.state.movie);
    const { movie } = movieStore.state;

    const posturl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

    this.el.innerHTML = /* html */ `
      <div style="background-image: url(${posturl})"class="poster"></div>
      <div class="specs">
        <div class="title">${movie.title}</div>

        <div class="labels">
          <span>${movie.release_date}</span>
          &nbsp;/&nbsp;
          <span>${movie.runtime}분</span>
        </div>

        <div>
          <h3>평점</h3>
          <p>${Number(movie.vote_average).toFixed(1)}</p>
        </div>

        <div>
          <h3>장르</h3>
          <p>${movie.genres.map(i => i.name)}</p>
        </div>

        <div class="tagline">
          ${movie.tagline}
        </div>

        <div class="plot">
          ${movie.overview}
        </div>
      </div>
    `
  }
}