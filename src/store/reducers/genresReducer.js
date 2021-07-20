import { GET_GENRES, ERROR_GENRES } from '../types';

const initialState = {
    genresList: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                genresList: action.payload
            }
        case ERROR_GENRES:
            return{
                error: action.payload
            }
        default: return state
    }
}