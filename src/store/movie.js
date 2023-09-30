import { Store } from "../core";

const store = new Store({
  searchText: '',
  page: 1,
  movies: []
})

export default store
export const searchMovies = async page => {
  if (page === 1){
    store.state.page = 1;
    store.state.movies = [];
  }

  // https://api.themoviedb.org/3/search/movie?api_key=46fd1ed18ff9f50afaea5ce2c1da227d&include_adult=false&language=ko-KR&page=${page}&query=${store.state.searchText}
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=46fd1ed18ff9f50afaea5ce2c1da227d&include_adult=false&language=ko-KR&page=${page}&query=${store.state.searchText}`);
  const { results } = await res.json();
  console.log(results);
  store.state.movies = [
    ...store.state.movies,
    ...results
  ]

}