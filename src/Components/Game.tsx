import React, {Fragment, useContext} from "react";
import GridItem from "./GridItem";
import GameContext from "../context/GameContext";


const Game = () => {

    const {
        field_1, field_2, field_3,
        field_4, field_5, field_6,
        field_7, field_8, field_9 }: any  = useContext(GameContext);

    console.log(useContext(GameContext))

    return (
        <div style={{
            padding:'1rem',
            boxShadow:"#D07440 5px 5px 15px, #FF8F4F -5px -5px 15px",
            display:'flex',
            justifyContent: "center",
            alignItems:'center',
        }}>
            <div>
                <GridItem gridItemState={field_1} rowNumber={1}/>
                <GridItem gridItemState={field_4} rowNumber={4}/>
                <GridItem gridItemState={field_7} rowNumber={7}/>
            </div>
            <div>
                <GridItem gridItemState={field_2} rowNumber={2}/>
                <GridItem gridItemState={field_5} rowNumber={5}/>
                <GridItem gridItemState={field_8} rowNumber={8}/>
            </div>
            <div>
                <GridItem gridItemState={field_3} rowNumber={3}/>
                <GridItem gridItemState={field_6} rowNumber={6}/>
                <GridItem gridItemState={field_9} rowNumber={9}/>
            </div>
        </div>
    )
}

export default Game;