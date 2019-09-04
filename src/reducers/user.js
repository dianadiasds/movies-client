import { NEW_USER } from '../actions/login'

export default function (state = {}, action = {}) {
    switch (action.type) {
        case NEW_USER:
            return action.payload
        default:
            return state
    }

}
