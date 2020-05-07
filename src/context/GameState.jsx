import React, { useReducer } from "react";
import GameReducer from "./GameReducer";
import GameContext from "./GameContext";

import {CHANGE_GRID_ITEM_STATE} from './Types'


const GameState = ({children}) => {

    const initialState = {
        //each filed represent GridItem's state
        //false - the field clear, 'cross' - cross (Player 1), 'circle' - circle (Player 2)
        field_1: false,
        field_2: false,
        field_3: false,
        field_4: false,
        field_5: false,
        field_6: false,
        field_7: false,
        field_8: false,
        field_9: false,
        //Player turn true for first player and false for second player
        playerTurn: true,
    }

    const [state, dispatch] = useReducer(GameReducer, initialState);

    const changeGridItemState = (gridID, gridValue) => {
        dispatch({
            type: CHANGE_GRID_ITEM_STATE,
            payload: {gridID, gridValue}
        })
    }

    return (
        <GameContext.Provider
            value={{
                field_1: state.field_1,
                field_2: state.field_2,
                field_3: state.field_3,
                field_4: state.field_4,
                field_5: state.field_5,
                field_6: state.field_6,
                field_7: state.field_7,
                field_8: state.field_8,
                field_9: state.field_9,
                playerTurn: state.playerTurn,
                changeGridItemState
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export default GameState;