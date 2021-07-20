import { GET_ANIME_MOVIES, ERROR_ANIME_MOVIES } from '../types';

const initialState = {
    animeMovieList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ANIME_MOVIES:
            return {
                ...state,
                animeMovieList: action.payload
            }
        case ERROR_ANIME_MOVIES:
            return{
                error: action.payload
            }
        default: return state
    }
}