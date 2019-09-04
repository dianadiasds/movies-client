import { combineReducers } from "redux";
import user from './user';
import movie from './movie';
import movielist from './movielist';
import jwt from './jwt';
import comments from './comments';


export default combineReducers({
    user,
    movie,
    movielist,
    jwt,
    comments
})
