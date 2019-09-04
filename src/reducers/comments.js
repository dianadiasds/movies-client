import { FETCH_COMMENTS, CREATE_COMMENT } from '../actions/comments'

const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return  action.payload;
        case CREATE_COMMENT:
            return [action.payload, ...state]
        default:
            return state
    }
}
export default reducer
