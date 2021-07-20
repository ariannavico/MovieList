import { GET_MOVIES, ERROR_MOVIES, 
    GET_AMERICAN_MOVIES, ERROR_AMERICAN_MOVIES, 
    GET_POPULAR_MOVIES,  ERROR_POPULAR_MOVIES, 
    GET_KID_MOVIES, ERROR_KID_MOVIES,
    GET_ANIME_MOVIES, ERROR_ANIME_MOVIES,
    GET_GENRES, ERROR_GENRES } from '../types';
import axios from 'axios'

//const apiMoviebyName = 'https://api.themoviedb.org/3/search/movie?api_key=66023da507207cf2b6b1e579572f54b8&query='
const apiMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=66023da507207cf2b6b1e579572f54b8'
const apiAmericanMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=66023da507207cf2b6b1e579572f54b8&primary_release_year=2010&sort_by=vote_average.desc?'
const apiPopularMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=66023da507207cf2b6b1e579572f54b8&primary_release_year=2010&sort_by=popularity.desc'
const apiKidMovie = 'https://api.themoviedb.org/3/discover/movie/?api_key=66023da507207cf2b6b1e579572f54b8&certification_country=US&certification.lte=G&sort_by=popularity.desc'
const apiAnimeMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=66023da507207cf2b6b1e579572f54b8&primary_release_year=2010with_genres=18&primary_release_year=2014'
//const sto = 'https://api.themoviedb.org/3/discover/movie?api_key=66023da507207cf2b6b1e579572f54b8&primary_release_year=2010with_genres=Comedy&primary_release_year=2014'
// const generi = 'https://api.themoviedb.org/3/genre/movie/list?api_key=66023da507207cf2b6b1e579572f54b8&primary_release_year=2010&language=en-US&name=Drama'
const apiAction = 'https://api.themoviedb.org/3/discover/movie/?api_key=66023da507207cf2b6b1e579572f54b8&primary_release_year=2010&certification_country=US&certification=R&sort_by=vote_average.desc'
const apiGetGenres = 'https://api.themoviedb.org/3/genre/movie/list?api_key=66023da507207cf2b6b1e579572f54b8&language=en-US'
export const getMovies = () => async dispatch => {

    try {
        const res = await axios.get(apiMovie)
        dispatch({
            type: GET_MOVIES,
            payload: res.data.results

        })
    } catch (error) {
        dispatch({
            type: ERROR_MOVIES,
            payload: error
        })
    }

}
export const getAmericanMovies = () => async dispatch => {

    try {
        const res = await axios.get(apiAmericanMovie)
        dispatch({
            type: GET_AMERICAN_MOVIES,
            payload: res.data.results

        })
    } catch (error) {
        dispatch({
            type: ERROR_AMERICAN_MOVIES,
            payload: error
        })
    }

}

export const getPopularMovies = () => async dispatch => {

    try {
        const res = await axios.get(apiPopularMovie)
        dispatch({
            type: GET_POPULAR_MOVIES,
            payload: res.data.results

        })
    } catch (error) {
        dispatch({
            type: ERROR_POPULAR_MOVIES,
            payload: error
        })
    }

}


export const getAnimeMovies = () => async dispatch => {

    try {
        const res = await axios.get(apiAnimeMovie)
        dispatch({
            type: GET_ANIME_MOVIES,
            payload: res.data.results

        })
    } catch (error) {
        dispatch({
            type: ERROR_ANIME_MOVIES,
            payload: error
        })
    }

}

export const getKidMovies = () => async dispatch => {

    try{
        const res = await axios.get(apiKidMovie)
        dispatch({
            type: GET_KID_MOVIES,
            payload: res.data.results
            
        })
    } catch(error){
        dispatch({
            type: ERROR_KID_MOVIES,
            payload: error
        })
    }
    
} 



export const getGenres = () => async dispatch => {

    try{
        const res = await axios.get(apiGetGenres)
        dispatch({
            type: GET_GENRES,
            payload: res.data.genres
        })
    } catch(error){
        dispatch({
            type: ERROR_GENRES,
            payload: error
        })
    }
    
} 
