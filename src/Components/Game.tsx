import React,{Fragment} from "react";
import GridItem from "./GridItem";


const Game = () => {
    return (
        <div style={{
            padding:'1rem',
            boxShadow:"#D07440 5px 5px 15px, #FF8F4F -5px -5px 15px",
            display:'flex',
            justifyContent: "center",
            alignItems:'center',
        }}>
            <div>
                <GridItem rowNumber={1}/>
                <GridItem rowNumber={2}/>
                <GridItem rowNumber={3}/>
            </div>
            <div>
                <GridItem rowNumber={4}/>
                <GridItem rowNumber={5}/>
                <GridItem rowNumber={6}/>
            </div>
            <div>
                <GridItem rowNumber={7}/>
                <GridItem rowNumber={8}/>
                <GridItem rowNumber={9}/>
            </div>
        </div>
    )
}

export default Game;