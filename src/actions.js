import fetch from 'isomorphic-fetch'

export const FETCH_GAME_REQUEST = 'FETCH_GAME_REQUEST';
export const FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCESS';
export const FETCH_GAME_FAILURE = 'FETCH_GAME_FAILURE';
export const TURN_TILE = 'TURN_TILE';

function fetchGameRequest() {
    return { type: FETCH_GAME_REQUEST }
}

function fetchGameSuccess(game) {
    return { type: FETCH_GAME_SUCCESS, game }
}

function fetchGameFailure(error) {
    return { type: FETCH_GAME_FAILURE, error}
}

export function turnTile(index) {
    return { type: TURN_TILE, index }
}

export function fetchGame() {
    return dispatch => {
        dispatch(fetchGameRequest());
        return fetch("http://localhost:3000/memory/game/aa051eca-0dbb-4911-8351-f6deb9ad3b45")
            .then(response => response.json())
            .then(game => dispatch(fetchGameSuccess(game)))
            .catch(response => dispatch(fetchGameFailure(response)));
    }
}