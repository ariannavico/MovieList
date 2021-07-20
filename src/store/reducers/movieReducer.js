import { GET_MOVIES, ERROR_MOVIES } from '../types';

const initialState = {
    movieList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movieList: action.payload
            }
        case ERROR_MOVIES:
            return{
                error: action.payload
            }
        default: return state
    }
}