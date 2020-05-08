import React from "react";

type PlayerColorsProps = {
    playerOneColor: string;
    playerTwoColor: string;
}

const PlayerColors = ({playerOneColor, playerTwoColor} : PlayerColorsProps ) => {
    return(
        <div style={{display:'inline-block',marginRight: '.25rem',marginLeft: '.25rem'}}>
            <div style={{display:'inline-block',width:'10px', height:'20px', backgroundColor:playerOneColor}}/>
            <div style={{display:'inline-block',width:'10px', height:'20px', backgroundColor:playerTwoColor}}/>
        </div>
    )
}

export default PlayerColors;