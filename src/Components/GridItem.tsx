import React,{useState} from "react";

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
        {isClicked ? rowNumber : null}
    </div>
}

export default GridItem;