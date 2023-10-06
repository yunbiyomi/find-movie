import { Store } from "../core";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: '영화를 검색해보세요!'
})

export default store
export const searchMovies = async page => {
  store.state.loading = true;
  store.state.page = page;

  if (page === 1){
    store.state.movies = [];
    store.state.message = '';
  }

  try {
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        title: store.state.searchText,
        page
      })
    })
    const { results, total_pages, total_results } = await res.json();
    console.log(results);

    if(Number(total_results) > 0){
      store.state.movies = [
        ...store.state.movies,
        ...results
      ]
      store.state.pageMax = Number(total_pages);
    }
    else {
      store.state.message = '입력된 제목과 일치하는 영화가 없습니다!'
      store.state.pageMax = 1;
    }
  } 
  catch (error) {
    console.log('searchMovies error: ', error);
  }
  finally {
    store.state.loading = false;
  }
}

export const getMovieDetails = async id => {
  try {
    const res = await fetch('/api/movie', {
      method: 'POST',
      body: JSON.stringify({
        id
      })
    })
    store.state.movie = await res.json();
  } catch (error) {
    console.log('getMovieDetails error:', error);
  }
}