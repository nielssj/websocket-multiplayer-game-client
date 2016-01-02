import { combineReducers } from 'redux'
import { FETCH_GAME_REQUEST,
    FETCH_GAME_SUCCESS,
    FETCH_GAME_FAILURE,
    TURN_TILE_REQUEST,
    TURN_TILE_SUCCESS,
    TURN_TILE_FAILURE
} from "./actions.js"

const initialState = {
    numTilesTurned: 0,
    lastTurned: 0,
    tiles: []
};

const memoryGame = (state = initialState, action = null) => {
    switch(action.type) {
        case FETCH_GAME_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_GAME_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                tiles: action.game.tiles
            });
        case FETCH_GAME_FAILURE:
            // FIXME: Implement this to show some kind of user-friendly error
            return state;
        case TURN_TILE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case TURN_TILE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                tiles: action.game.tiles
            });
        case TURN_TILE_FAILURE:
            // FIXME: Implement this to show some kind of user-friendly error
            return state;
        default:
            return state;
    }
};

export default memoryGame