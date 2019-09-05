import * as request from 'superagent'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'

export function setComments(payload) {
    return {
        type: FETCH_COMMENTS,
        payload: payload
    }
}

export function getComments(movieId) {
    return function (dispatch) {
        request(`http://localhost:5000/comments/movies/${movieId}`)
            .then(res => {
                dispatch(setComments(res.body))
            })
            .catch(console.error)
    }
}
export const CREATE_COMMENT = 'CREATE_COMMENT';

export function newComment(payload) {
    return {
        type: CREATE_COMMENT,
        payload: payload,
    }
}

export const createComment = data => (dispatch, getState) => {
    const state = getState();
    const jwt = state.jwt;

    request
        .post('http://localhost:5000/comments')
        .set('Authorization', `Bearer ${jwt}`)
        .send(data)
        .then(response => {
            const action = newComment(response.body);

            dispatch(action)
        })
        .catch(console.error)
};
