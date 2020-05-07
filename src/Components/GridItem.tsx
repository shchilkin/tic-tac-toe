import React,{useState} from "react";
import GameState from "../context/GameState";
import Circle from "./Circle";
import Cross from "./Cross";

type GridItemProps = {
    rowNumber: number;
}


const GridItem = ({rowNumber} : GridItemProps) => {
    const [isClicked, setIsClicked] = useState(false)


    return <div style={{
        height:'70px',
        width: '70px',
        border:'2px solid black',
        display:'flex',
        alignItems:'center',
        justifyContent: "center",
    }}
                onClick={() => {
                    setIsClicked(!isClicked)
                    console.log(`Clicked ${rowNumber}`)
                }}
    >
        {isClicked ? <Circle /> : rowNumber}
    </div>
}

export default GridItem;