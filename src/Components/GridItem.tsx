import React, {useContext} from "react";
import Circle from "./Circle";
import GameContext from "../context/GameContext";
import Cross from "./Cross";

type GridItemProps = {
    rowNumber: number;
    gridItemState: boolean
}

const GridItem = ({rowNumber, gridItemState} : GridItemProps) => {

    const { changeGridItemState, playerTurn }: any = useContext(GameContext)

    const playerSign = () => {
        if(String(gridItemState) === 'circle') return <Circle/>
        else if(String(gridItemState) === 'cross') return <Cross/>
        else return null
    }

    console.log(`Type filed ${rowNumber}`,typeof gridItemState)

    return <div style={{
        height:'70px',
        width: '70px',
        border:'2px solid black',
        display:'flex',
        alignItems:'center',
        justifyContent: "center",
    }}
                onClick={() => {
                    // gridItemState is type boolean by default, however after change it will be type string
                    // check is needed to prevent reassigning GridItem value once the value is assigned
                    if (typeof gridItemState === "boolean") {
                        changeGridItemState(rowNumber, playerTurn ? 'circle' : 'cross')
                    }
                }}
    >
        {gridItemState ? playerSign() : null}
    </div>
}

export default GridItem;