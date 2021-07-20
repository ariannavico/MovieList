import { GET_KID_MOVIES, ERROR_KID_MOVIES } from '../types';

const initialState = {
    kidMovieList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_KID_MOVIES:
            return {
                ...state,
                kidMovieList: action.payload
            }
        case ERROR_KID_MOVIES:
            return{
                error: action.payload
            }
        default: return state
    }
}