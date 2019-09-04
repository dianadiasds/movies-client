import {JWT} from '../actions/login'

export default function (state = null, action = {}) {
    switch (action.type) {
        case JWT:
            return action.payload
        default:
            return state
    }
}
