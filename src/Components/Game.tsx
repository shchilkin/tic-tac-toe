import React, {Fragment, useContext} from "react";
import GridItem from "./GridItem";
import GameContext from "../context/GameContext";


const Game = () => {

    const {
        field_1, field_2, field_3,
        field_4, field_5, field_6,
        field_7, field_8, field_9,
        playerTurn, restartGame, turnCount,isGameOver, win, winner
    }: any  = useContext(GameContext);

    const ResultAnnouncer = (turnCount: number) => {
        const gameResultWrapper = (winner: number) => {
            if (winner === 1) return 'Player One won!'
            else if (winner === 2) return 'Player Two won!'
            else return 'Draw!'
         }
        if (turnCount === 9 || win === true) {
            return (
                <Fragment>
                    <h5  className={'mb-3'} >{gameResultWrapper(winner)}</h5>
                    <button onClick={restartGame} className={'button'}>Play again?</button>
                </Fragment>
            )
        } else return null
    }

    console.log('is game over', isGameOver)
    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <div className={'row mb-3'}>
                <div className={'col-md-12'}>
                    {(!isGameOver) &&
                    <h5 style={{margin:0}}><span
                        style={{
                            verticalAlign:'bottom',
                            backgroundColor: playerTurn ? '#FD6B15' : '#158DFD',
                            color: playerTurn ? '#000' : '#FFF'
                        }}
                        className={'badge'}
                    >Player {playerTurn ? '1' : '2'}</span> turn
                    </h5>}
                </div>
            </div>
            {ResultAnnouncer(turnCount)}
            <div style={{
                padding:'1rem',
                borderRadius: '12px',
                border: '1px solid rgb(198, 211, 208)',
                boxShadow:"#A8B3B1 5px 5px 15px, #D0DEDA -5px -5px 15px",
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
        </div>
    )
}

export default Game;