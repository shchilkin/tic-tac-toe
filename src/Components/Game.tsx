import React,{Fragment} from "react";
import GridItem from "./GridItem";


const Game = () => {
    return (
        <Fragment>
            <div>
                <GridItem/>
                <GridItem/>
                <GridItem/>
            </div>
            <div>
                <GridItem/>
                <GridItem/>
                <GridItem/>
            </div>
            <div>
                <GridItem/>
                <GridItem/>
                <GridItem/>
            </div>
        </Fragment>
    )
}

export default Game;