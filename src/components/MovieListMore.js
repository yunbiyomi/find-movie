import { Component } from "../core";
import movieStore, { searchMovies } from "../store/movie";

export default class MovieListMore extends Component {
  constructor() {
    super({
      tagName: 'button',
      className: 'btn-more hide'
    })
    movieStore.subscribe('pageMax', () => {
      const { page, pageMax } = movieStore.state;
      pageMax > page 
        ? this.el.classList.remove('hide') 
        : this.el.classList.add('hide');
    })
  }
  render() {
    this.el.textContent = 'More';

    this.el.addEventListener('click', async () => {
      this.el.classList.add('hide');
      await searchMovies(movieStore.state.page + 1)
    })
  }
}