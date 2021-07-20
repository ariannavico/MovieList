import { GET_POPULAR_MOVIES, ERROR_POPULAR_MOVIES } from '../types';

const initialState = {
    popularMovieList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovieList: action.payload
            }
        case ERROR_POPULAR_MOVIES:
            return{
                error: action.payload
            }
        default: return state
    }
}