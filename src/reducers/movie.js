import { FETCH_MOVIE_BY_ID} from '../actions/movie'

const reducer = (state = [], action = {}) => {
    switch (action.type) {

        case FETCH_MOVIE_BY_ID:
            return action.payload

        default:
            return state
    }
}
export default reducer
