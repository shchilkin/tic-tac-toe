import React, {useContext} from "react";
import GameContext from "../context/GameContext";
import Circle from "./Circle";
import Cross from "./Cross";

type GridItemProps = {
    rowNumber: number;
    gridItemState: boolean
}

const GridItem = ({rowNumber, gridItemState} : GridItemProps) => {

    const { changeGridItemState, playerTurn,playerColorScheme, colorSchemeHandler }: any = useContext(GameContext)
    const firstColor: string = colorSchemeHandler(playerColorScheme).playerOneColor;
    const secondColor: string = colorSchemeHandler(playerColorScheme).playerTwoColor;

    console.log(secondColor)

    const playerSign = () => {
        if(String(gridItemState) === 'circle') return <Circle color={firstColor}/>
        else if(String(gridItemState) === 'cross') return <Cross color={secondColor}/>
        else return null
    }

    // console.log(`Type filed ${rowNumber}`,typeof gridItemState)

    return <div style={{
        height:'70px',
        width: '70px',
        border:'2px solid #A8B3B1',
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