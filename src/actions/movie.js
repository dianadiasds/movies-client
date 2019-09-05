import * as request from 'superagent';

export const FETCH_MOVIE_BY_ID = 'FETCH_MOVIE_BY_ID';

export function setMovieById(payload) {
    return {
        type: FETCH_MOVIE_BY_ID,
        payload: payload,
    }
}

export function getMovieByID(movieId) {
    return function (dispatch) {
        request(`http://localhost:5000/movies/${movieId}`)
            .then(res => {
                const body = res.body;
                dispatch(setMovieById(body))
            })
            .catch(console.error)
    }
}
