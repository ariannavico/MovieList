import {combineReducers} from 'redux';
import movieReducer from './movieReducer';
import americanMovieReducer from './americanMovieReducer';
import popularMovieReducer from './popularMovieReducer';
import kidMovieReducer from './kidMovieReducer'
import animeMovieReducer from './animeMovieReducer'
import genresReducer from './genresReducer'

export default combineReducers({
   movieList : movieReducer,
   americanMovieList : americanMovieReducer,
   popularMovieList : popularMovieReducer,
   kidMovieList : kidMovieReducer,
   animeMovieList : animeMovieReducer,
   genresList : genresReducer

})