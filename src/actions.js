import fetch from 'isomorphic-fetch'

export const FETCH_GAME_REQUEST = 'FETCH_GAME_REQUEST';
export const FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCESS';
export const FETCH_GAME_FAILURE = 'FETCH_GAME_FAILURE';
export const TURN_TILE_REQUEST = 'TURN_TILE_REQUEST';
export const TURN_TILE_SUCCESS = 'TURN_TILE_SUCCESS';
export const TURN_TILE_FAILURE = 'TURN_TILE_FAILURE';

function fetchGameRequest() {
    return { type: FETCH_GAME_REQUEST }
}

function fetchGameSuccess(game) {
    return { type: FETCH_GAME_SUCCESS, game }
}

function fetchGameFailure(error) {
    return { type: FETCH_GAME_FAILURE, error}
}

function turnTileRequest() {
    return { type: TURN_TILE_REQUEST }
}

function turnTileSuccess(game) {
    return { type: TURN_TILE_SUCCESS, game }
}

function turnTileFailure(error) {
    return { type: TURN_TILE_FAILURE, error }
}

export function turnTile(index) {
    return dispatch => {
        dispatch(turnTileRequest());
        return fetch("http://localhost:3000/memory/game/move", {
            method: 'post',
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ type: "TURN_TILE", tileId: index })
        })
            .then(response => response.json())
            .then(game => {
                setTimeout(() => dispatch(fetchGame()), 1000);
                return dispatch(turnTileSuccess(game))
            })
            .catch(response => dispatch(turnTileFailure(response)));
    }
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