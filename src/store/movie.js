import { Store } from "../core";

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
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
    // https://api.themoviedb.org/3/search/movie?api_key=46fd1ed18ff9f50afaea5ce2c1da227d&include_adult=false&language=ko-KR&page=${page}&query=${store.state.searchText}
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=46fd1ed18ff9f50afaea5ce2c1da227d&include_adult=false&language=ko-KR&page=${page}&query=${store.state.searchText}`);
    const { results, total_pages, total_results } = await res.json();

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