import React, {useContext} from "react";
import GameContext from "../context/GameContext";

type PlayerColorsProps = {
    playerOneColor: string;
    playerTwoColor: string;
    colorSchemeNumber: number,
}

const PlayerColors = ({playerOneColor, playerTwoColor, colorSchemeNumber} : PlayerColorsProps ) => {
    const {playerColorScheme, changeColorScheme}: any  = useContext(GameContext);

    return(
        <div onClick={() => changeColorScheme(colorSchemeNumber)}
            style={{
            width:'30px',
            boxSizing:'content-box',
            borderRadius:'4px',
            height:'30px',
            border: `2px solid ${(playerColorScheme === colorSchemeNumber) ? 'black' : 'transparent'}`,
            display:'inline-block',
            marginRight: '.25rem',
            marginLeft: '.25rem'}}>
            <div style={{display:'inline-block',width:'50%', height:'100%',
                borderTopLeftRadius:'2px',
                borderBottomLeftRadius:'2px',
                backgroundColor:playerOneColor}}/>
            <div style={{display:'inline-block',width:'50%', height:'100%',
                borderTopRightRadius:'2px',
                borderBottomRightRadius:'2px',
                backgroundColor:playerTwoColor}}/>
        </div>
    )
}

export default PlayerColors;