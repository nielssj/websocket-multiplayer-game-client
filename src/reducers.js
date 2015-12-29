import { combineReducers } from 'redux'
import { TURN_TILE } from "./actions.js"

const initialState = {
    numTilesTurned: 1,
    lastTurned: 0,
    tiles: [
        { name: "green", turned: true, completed: false },
        { turned: false, completed: false },
        { turned: false, completed: false },
        { turned: false, completed: false }
    ]
};

const answer = [
    { name: "green" },
    { name: "red"},
    { name: "green"},
    { name: "red"}
];

const turnTile = (state, index) => {
    let tile = state.tiles[index];

    if (state.numTilesTurned < 2) {
        // Make turned version of tile
        let turnedTile = Object.assign({}, tile, {
            turned: true,
            name: answer[index].name
        });

        // Replace tile with turned tile in new state
        return Object.assign({}, state, {
            tiles: [
                ...state.tiles.slice(0, index),
                turnedTile,
                ...state.tiles.slice(index + 1)
            ],
            numTilesTurned: state.numTilesTurned + 1
        })
    } else {
        // Retrieve already turned tiles and their IDs
        let turnedTilesIds = [];
        let turnedTiles = [];
        state.tiles.forEach((tile, id) => {
            if(tile.turned && !tile.completed) {
                turnedTilesIds.push(id);
                turnedTiles.push(tile);
            }
        });

        // Complete or reset tiles, depending on if they match
        if(turnedTiles[0].name === turnedTiles[1].name) {
            turnedTiles = turnedTiles.map(tile => {
                return Object.assign({}, tile, {
                    completed: true
                });
            });
        } else {
            turnedTiles = turnedTiles.map(tile => {
                return Object.assign({}, tile, {
                    turned: false,
                    name: undefined
                })
            });
        }

        // Compute "fresh" state after score/reset
        let freshState = Object.assign({}, state, {
            tiles: [
                ...state.tiles.slice(0, turnedTilesIds[0]),
                turnedTiles[0],
                ...state.tiles.slice(turnedTilesIds[0] + 1, turnedTilesIds[1]),
                turnedTiles[1],
                ...state.tiles.slice(turnedTilesIds[1] + 1)
            ],
            numTilesTurned: 0
        });

        return turnTile(freshState, index);
    }
};

const memoryGame = (state = initialState, action = null) => {
    switch(action.type) {
        case TURN_TILE:
            return turnTile(state, action.index);
        default:
            return state;
    }
};

export default memoryGame