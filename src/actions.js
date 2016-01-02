import fetch from 'isomorphic-fetch'
import io from 'socket.io-client';

export const START_GAME_REQUEST = 'START_GAME_REQUEST';
export const START_GAME_SUCCESS= 'START_GAME_SUCCESS';
export const START_GAME_FAILURE = 'START_GAME_FAILURE';
export const FETCH_GAME_REQUEST = 'FETCH_GAME_REQUEST';
export const FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCESS';
export const FETCH_GAME_FAILURE = 'FETCH_GAME_FAILURE';
export const TURN_TILE_REQUEST = 'TURN_TILE_REQUEST';
export const TURN_TILE_SUCCESS = 'TURN_TILE_SUCCESS';
export const TURN_TILE_FAILURE = 'TURN_TILE_FAILURE';

function startGameRequest() {
    return { type: START_GAME_REQUEST }
}

function startGameSuccess(game) {
    return { type: START_GAME_SUCCESS, game }
}

function startGameFailure(error) {
    return { type: START_GAME_FAILURE, error }
}

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

function listenToGame(dispatch, gameId) {
    let socket = io(`http://localhost:3000/${gameId}`);
    socket.on("changed", game => {
        dispatch(fetchGameSuccess(game));
    })
}

export function turnTile(gameId, tileId) {
    return dispatch => {
        dispatch(turnTileRequest());
        return fetch(`http://localhost:3000/memory/game/${gameId}/move`, {
            method: 'post',
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ type: "TURN_TILE", tileId: tileId})
        })
            .then(response => response.json())
            .then(game => dispatch(turnTileSuccess(game)))
            .catch(response => dispatch(turnTileFailure(response)));
    }
}

export function startGame() {
    return dispatch => {
        dispatch(startGameRequest());
        return fetch("http://localhost:3000/memory/game", {
            method: 'post',
            headers: { "Content-Type": "application/json", "Accept": "application/json" }
        })
            .then(response => response.json())
            .then(game => {
                listenToGame(dispatch, game.id);
                dispatch(startGameSuccess(game))
            })
            .catch(response => dispatch(startGameFailure()));
    }
}

export function fetchGame(gameId) {
    return dispatch => {
        dispatch(fetchGameRequest());
        return fetch(`http://localhost:3000/memory/game/${gameId}`)
            .then(response => response.json())
            .then(game => dispatch(fetchGameSuccess(game)))
            .catch(response => dispatch(fetchGameFailure(response)));
    }
}