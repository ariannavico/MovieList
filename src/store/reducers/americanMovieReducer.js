import { GET_AMERICAN_MOVIES, ERROR_AMERICAN_MOVIES } from '../types';

const initialState = {
    americanMovieList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_AMERICAN_MOVIES:
            return {
                ...state,
                americanMovieList: action.payload
            }
        case ERROR_AMERICAN_MOVIES:
            return{
                error: action.payload
            }
        default: return state
    }
}