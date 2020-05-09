import React, {useContext} from "react";
import GameContext from "../context/GameContext";
import Circle from "./Circle";
import Cross from "./Cross";

type GridItemProps = {
    rowNumber: number;
    gridItemState: boolean;
    borderColor: string;
    borderTopWidth?:number,
    borderBottomWidth?:number,
    borderLeftWidth?:number,
    borderRightWidth?:number,
    borderTopLeftRadius?: number,
    borderTopRightRadius?: number,
    borderBottomLeftRadius?: number,
    borderBottomRightRadius?: number,
}

const GridItem = ({
                      rowNumber,
                      gridItemState,
                      borderColor,
                      borderTopWidth = 0,
                      borderBottomWidth = 0,
                      borderLeftWidth = 0,
                      borderRightWidth = 0,
                      borderTopLeftRadius= 0,
                      borderTopRightRadius = 0,
                      borderBottomLeftRadius =0,
                      borderBottomRightRadius =0} : GridItemProps) => {

    const { changeGridItemState, isGameOver,
        playerTurn,playerColorScheme, colorSchemeHandler }: any = useContext(GameContext)
    const firstColor: string = (isGameOver ?
            colorSchemeHandler(playerColorScheme).playerOneDarkShadow :
        colorSchemeHandler(playerColorScheme).playerOneColor);
    const secondColor: string = (isGameOver ?
        colorSchemeHandler(playerColorScheme).playerTwoDarkShadow :
            colorSchemeHandler(playerColorScheme).playerTwoColor
        );

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
        borderStyle:'solid',
        borderColor: borderColor,
        borderTopWidth:borderTopWidth,
        borderBottomWidth:borderBottomWidth,
        borderLeftWidth:borderLeftWidth,
        borderRightWidth:borderRightWidth,
        borderTopLeftRadius:borderTopLeftRadius,
        borderTopRightRadius:borderTopRightRadius,
        borderBottomLeftRadius:borderBottomLeftRadius,
        borderBottomRightRadius:borderBottomRightRadius,
        display:'flex',
        alignItems:'center',
        justifyContent: "center",
    }}
                onClick={() => {
                    if(!isGameOver){
                        // gridItemState is type boolean by default, however after change it will be type string
                        // check is needed to prevent reassigning GridItem value once the value is assigned
                        if (typeof gridItemState === "boolean") {
                            changeGridItemState(rowNumber, playerTurn ? 'circle' : 'cross')
                        }
                    }

                }}
    >
        {gridItemState ? playerSign() : null}
    </div>
}

export default GridItem;