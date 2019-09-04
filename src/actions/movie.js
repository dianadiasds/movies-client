import * as request from 'superagent';

export const FETCH_MOVIES = 'FETCH_MOVIES';

export function setMovies(payload) {
    return {
        type: FETCH_MOVIES,
        payload: payload,
    }
}

export function getMovies() {
    return function (dispatch) {
        request(`http://localhost:5000/movies`)
            .then(res => {
                const body = res.body;
                dispatch(setMovies(body))
            })
            .catch(console.error)
    }
}

export const CREATE_MOVIE = 'CREATE_MOVIE';

export function newMovie(payload) {
    return {
        type: CREATE_MOVIE,
        payload: payload,
    }
}
export const createMovie = data => (dispatch, getState) => {
    const state = getState()
    const  jwt  = state.jwt
    request
        .post(`http://localhost:5000/movie`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            const action = newMovie(response.body);
            dispatch(action)
        })
        .catch(console.error)
};
