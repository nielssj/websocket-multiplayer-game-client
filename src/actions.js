import fetch from 'isomorphic-fetch'
import io from 'socket.io-client';

export const START_GAME_REQUEST = 'START_GAME_REQUEST';
export const START_GAME_SUCCESS= 'START_GAME_SUCCESS';
export const START_GAME_FAILURE = 'START_GAME_FAILURE';
export const FETCH_GAME_REQUEST = 'FETCH_GAME_REQUEST';
export const FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCESS';
export const FETCH_GAME_FAILURE = 'FETCH_GAME_FAILURE';
export const JOIN_GAME_REQUEST = 'JOIN_GAME_REQUEST';
export const JOIN_GAME_SUCCESS = 'JOIN_GAME_SUCCESS';
export const JOIN_GAME_FAILURE = 'JOIN_GAME_FAILURE';
export const TURN_TILE_REQUEST = 'TURN_TILE_REQUEST';
export const TURN_TILE_SUCCESS = 'TURN_TILE_SUCCESS';
export const TURN_TILE_FAILURE = 'TURN_TILE_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

var socket = null;

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

function joinGameRequest() {
    return { type: JOIN_GAME_REQUEST }
}

function joinGameSuccess(game) {
    return { type: JOIN_GAME_SUCCESS, game }
}

function joinGameFailure(error) {
    return { type: JOIN_GAME_FAILURE, error}
}

function turnTileRequest() {
    return { type: TURN_TILE_REQUEST }
}

function turnTileSuccess() {
    return { type: TURN_TILE_SUCCESS }
}

function turnTileFailure(error) {
    return { type: TURN_TILE_FAILURE, error }
}

function loginRequest(username, password) {
    return { type: LOGIN_REQUEST, username, password }
}

function loginSuccess(username) {
    return { type: LOGIN_SUCCESS, username }
}

function loginFailure(error) {
    return { type: LOGIN_FAILURE, error }
}

function fetchUserRequest() {
    return { type: FETCH_USER_REQUEST }
}

function fetchUserSuccess(username) {
    return { type: FETCH_USER_SUCCESS, username }
}

function fetchUserFailure(error) {
    return { type: FETCH_USER_FAILURE, error }
}

function listenToGame(dispatch, gameId) {
    if(socket) {
        socket.socket.disconnect();
    }

    socket = io(`http://localhost:3000/${gameId}`, { query: `ns=${gameId}` });
    socket.on("changed", game => {
        dispatch(fetchGameSuccess(game));
    })
}

export function turnTile(gameId, tileId) {
    return dispatch => {
        dispatch(turnTileRequest());
        let authToken = localStorage.getItem("loginToken");
        return fetch(`http://localhost:3000/memory/game/${gameId}/move`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${authToken}`
            },
            body: JSON.stringify({ type: "TURN_TILE", tileId: tileId})
        })
            .then(response => dispatch(turnTileSuccess()))
            .catch(response => dispatch(turnTileFailure(response)));
    }
}

export function startGame() {
    return dispatch => {
        dispatch(startGameRequest());
        let authToken = localStorage.getItem("loginToken");
        return fetch("http://localhost:3000/memory/game", {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${authToken}`
            }
        })
            .then(response => response.json())
            .then(game => {
                console.log("Started game [" + game.id + "]");
                listenToGame(dispatch, game.id);
                dispatch(startGameSuccess(game))            })
            .catch(response => dispatch(startGameFailure()));
    }
}

export function fetchGame(gameId) {
    return dispatch => {
        dispatch(fetchGameRequest());
        return fetch(`http://localhost:3000/memory/game/${gameId}`)
            .then(response => response.json())
            .then(game => {
                console.log("Fetched game [" + game.id + "]");
                listenToGame(dispatch, game.id);
                dispatch(fetchGameSuccess(game))
            })
            .catch(response => dispatch(fetchGameFailure(response)));
    }
}

export function joinGame(gameId) {
    return dispatch => {
        dispatch(joinGameRequest());
        let authToken = localStorage.getItem("loginToken");
        return fetch(`http://localhost:3000/memory/game/${gameId}/player`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${authToken}`
            }
        })
            .then(response => response.json())
            .then(game => {
                console.log("Joined game [" + game.id + "]");
                listenToGame(dispatch, game.id);
                dispatch(joinGameSuccess(game));
            })
            .catch(response => dispatch(joinGameFailure(response)));
    }
}

export function fetchUser() {
    return dispatch => {
        let authToken = localStorage.getItem("loginToken");
        if(authToken) {
            dispatch(fetchUserRequest());
            return fetch(`http://localhost:3000/memory/player`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authToken}`
                }
            })
                .then(response => response.json())
                .then(user => {
                    console.log("Fetched user [" + user.username + "]");
                    dispatch(fetchUserSuccess(user.username));
                })
                .catch(response => dispatch(fetchUserFailure(response)));
        }
    }
}

export function login(username, password) {
    return dispatch => {
        dispatch(loginRequest());
        return fetch(`http://localhost:3000/login`, {
            method: 'post',
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(response => {
                if(response.status != 401) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(token => {
                console.log("Logged in successfully [" + username + "]");
                localStorage.setItem("loginToken", token);
                dispatch(loginSuccess(username));
            })
            .catch(response => response.json()
                    .then(error => dispatch(loginFailure(error))));
    }
}