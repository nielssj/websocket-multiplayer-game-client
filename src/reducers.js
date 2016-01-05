import { combineReducers } from 'redux'
import {
    START_GAME_REQUEST,
    START_GAME_SUCCESS,
    START_GAME_FAILURE,
    FETCH_GAME_REQUEST,
    FETCH_GAME_SUCCESS,
    FETCH_GAME_FAILURE,
    JOIN_GAME_REQUEST,
    JOIN_GAME_SUCCESS,
    JOIN_GAME_FAILURE,
    TURN_TILE_REQUEST,
    TURN_TILE_SUCCESS,
    TURN_TILE_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./actions.js"

const initialState = {
    isFetching: false,
    game: {
        tiles: [],
        points: 0
    },
    user: {
        isLoggingIn: false
    }
};

const memoryGame = (state = initialState, action = null) => {
    switch(action.type) {
        case START_GAME_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case START_GAME_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                game: action.game
            });
        case START_GAME_FAILURE:
            // FIXME: Implement this to show some kind of user-friendly error
            return state;
        case FETCH_GAME_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_GAME_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                game: action.game
            });
        case FETCH_GAME_FAILURE:
            // FIXME: Implement this to show some kind of user-friendly error
            return state;
        case JOIN_GAME_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case JOIN_GAME_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                game: action.game
            });
        case JOIN_GAME_FAILURE:
            // FIXME: Implement this to show some kind of user-friendly error
            return state;
        case TURN_TILE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case TURN_TILE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false
            });
        case TURN_TILE_FAILURE:
            // FIXME: Implement this to show some kind of user-friendly error
            return state;
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                user: {
                    isLoggingIn: true
                }
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: {
                    isLoggingIn: false,
                    token: action.token,
                    username: action.username
                }
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                user: {
                    isLoggingIn: false,
                    lastLoginError: action.error
                }
            });
        default:
            console.warn("Unknown action type encountered [" + action.type + "], action ignored..");
            return state;
    }
};

export default memoryGame