import React, { useReducer,createContext } from "react";
import GameReducer from "./GameReducer";

const GameContext = createContext('');

const GameState = (props: any) => {

    const initialState = {
    }

    const [state, dispatch] = useReducer(GameReducer, initialState);

    return (
        <GameContext.Provider
            value=''
        >
            {props.children}
        </GameContext.Provider>
    );
};

export default GameState;