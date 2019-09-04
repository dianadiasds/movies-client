import {FETCH_MOVIES, CREATE_MOVIE} from '../actions/movielist'

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return action.payload
        case CREATE_MOVIE:
            return [action.payload, ...state]
        default:
            return state
    }
}
export default reducer
