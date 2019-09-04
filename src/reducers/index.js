import { combineReducers } from "redux";
import user from './user';
import movie from './movie';
import jwt from './jwt'

export default combineReducers({
    user,
    movie,
    jwt
})
