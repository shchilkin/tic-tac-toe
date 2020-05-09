import React, {Fragment, useContext} from "react";
import GridItem from "./GridItem";
import GameContext from "../context/GameContext";
import PlayerColors from "./PlayerColors";
import Button from "./Button";


const Game = () => {

    const {
        field_1, field_2, field_3,
        field_4, field_5, field_6,
        field_7, field_8, field_9,
        playerTurn, restartGame,
        turnCount,isGameOver, win, winner,playerColorScheme,
        colorSchemeHandler
    }: any  = useContext(GameContext);

    const ColorSchemes = () => {
        return(
            <Fragment>
                <h6 className={'mt-3'}>Player colors</h6>
                <div className={'mt-1'}
                     style={{
                         marginTop:'1rem',
                         boxShadow:`#A8B3B1 5px 5px 15px, #D0DEDA -5px -5px 15px`,
                         borderRadius:'12px', paddingBottom:'.5rem',paddingTop:'.5rem',
                     }}>
                    <PlayerColors playerOneColor='#FD6B15' playerTwoColor='#158DFD' colorSchemeNumber={1}/>
                    <PlayerColors playerOneColor='#DB6570' playerTwoColor='#71db65' colorSchemeNumber={2}/>
                    <PlayerColors playerOneColor='#9dd1e9' playerTwoColor='#e9b69d' colorSchemeNumber={3}/>
                    <PlayerColors playerOneColor='#87cd1e' playerTwoColor='#CD1E87' colorSchemeNumber={4}/>
                    <PlayerColors playerOneColor='#E144F9' playerTwoColor='#F9ed44' colorSchemeNumber={5}/>
                </div>
            </Fragment>
        )
    }


    const shadowColorHandler = () => {

        let shadowColors = {color:'#C6D3D0', darkShadow:'#A8B3B1', lightShadow:'#D0DEDA'};

        if (winner === 1){
            return {
                color:colorSchemeHandler(playerColorScheme).playerOneColor,
                darkShadow:colorSchemeHandler(playerColorScheme).playerOneDarkShadow,
                lightShadow:colorSchemeHandler(playerColorScheme).playerOneLightShadow,
            }
        }

        if (winner === 2){
            return {
                color: colorSchemeHandler(playerColorScheme).playerTwoColor,
                darkShadow:colorSchemeHandler(playerColorScheme).playerTwoDarkShadow,
                lightShadow:colorSchemeHandler(playerColorScheme).playerTwoLightShadow,
            }
        }

        if (isGameOver){
            return {color:'#9EA9A6',darkShadow:'#86908D', lightShadow:'#A6B1AE'}
        }

        return shadowColors
    }
    const ResultAnnouncer = (turnCount: number) => {
        const gameResultWrapper = (winner: number) => {
            if (winner === 1) return '🎉 Player One won! 🎉'
            else if (winner === 2) return '🥳 Player Two won! 🥳'
            else return '😐 Draw!'
        }
        if (turnCount === 9 || win === true) {
            return (
                <Fragment>
                    <h5  className={'mb-3'} >{gameResultWrapper(winner)}</h5>
                    <Button
                        color={'#000'}
                        backgroundColor={shadowColorHandler().color}
                        darkShadow={shadowColorHandler().darkShadow}
                        lightShadow={shadowColorHandler().lightShadow}
                        onClick={restartGame}>Play again?</Button>
                </Fragment>
            )
        } else return null
    }

    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <div className={'row mb-3'}>
                <div className={'col-md-12'}>
                    {(!isGameOver) &&
                    <h5 style={{margin:0}}><span
                        style={{
                            verticalAlign:'bottom',
                            backgroundColor: playerTurn ? colorSchemeHandler(playerColorScheme).playerOneColor
                                : colorSchemeHandler(playerColorScheme).playerTwoColor,}}
                        className={'badge'}
                    >Player {playerTurn ? '1' : '2'}</span> turn
                    </h5>}
                </div>
            </div>
            {ResultAnnouncer(turnCount)}
            <div style={{
                padding:'1rem',
                borderRadius: '12px',
                border: `1px solid ${shadowColorHandler().color}`,
                boxShadow:`${shadowColorHandler().darkShadow} 5px 5px 15px, 
                ${shadowColorHandler().lightShadow} -5px -5px 15px`,
                display:'flex',
                justifyContent: "center",
                alignItems:'center',
            }}>
                <div>
                    <GridItem borderColor={shadowColorHandler().darkShadow} gridItemState={field_1} rowNumber={1}/>
                    <GridItem borderColor={shadowColorHandler().darkShadow} gridItemState={field_4} rowNumber={4}/>
                    <GridItem borderColor={shadowColorHandler().darkShadow} gridItemState={field_7} rowNumber={7}/>
                </div>
                <div>
                    <GridItem borderColor={shadowColorHandler().darkShadow} gridItemState={field_2} rowNumber={2}/>
                    <GridItem borderColor={shadowColorHandler().darkShadow} gridItemState={field_5} rowNumber={5}/>
                    <GridItem borderColor={shadowColorHandler().darkShadow} gridItemState={field_8} rowNumber={8}/>
                </div>
                <div>
                    <GridItem borderColor={shadowColorHandler().darkShadow} gridItemState={field_3} rowNumber={3}/>
                    <GridItem borderColor={shadowColorHandler().darkShadow} gridItemState={field_6} rowNumber={6}/>
                    <GridItem borderColor={shadowColorHandler().darkShadow} gridItemState={field_9} rowNumber={9}/>
                </div>
            </div>
            {(turnCount === 0) && ColorSchemes()}
        </div>
    )
}

export default Game;