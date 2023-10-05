import { Component } from "../core";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  constructor() {
    super({
      className: 'search'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <input value="${movieStore.state.searchText}" placeholder="검색하고 싶은 영화의 제목을 작성해 주세요!"/>
      <button>search</button>
    `

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {
      movieStore.state.searchText = inputEl.value;
    })
    inputEl.addEventListener('keydown', e => {
      if(e.key === 'Enter' && movieStore.state.searchText.trim())
        searchMovies(1);
    })

    const btnEl = this.el.querySelector('button');
    btnEl.addEventListener('click', () => {
      if(movieStore.state.searchText.trim())
        searchMovies(1);
    })
  }
}