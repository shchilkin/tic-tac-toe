import {CHANGE_GRID_ITEM_STATE, RESTART_GAME, CHANGE_COLOR_SCHEME, CHANGE_GAME_MODE} from './Types'

function checkWinner(state:object) {

    const score =(state: any) =>{
        let scoreArray = []

        for (let i: number = 1; i < 10; i++){
            switch (state[`field_${i}`]) {
                case false:
                    scoreArray.push(0)
                    break
                case 'circle':
                    scoreArray.push(1)
                    break
                case 'cross':
                    scoreArray.push(-1)
            }
        }
        return scoreArray
    }
    const winCases: Array<number> = [
        (score(state)[0] + score(state)[1] + score(state)[2]),
        (score(state)[3] + score(state)[4] + score(state)[5]),
        (score(state)[6] + score(state)[7] + score(state)[8]),
        (score(state)[0] + score(state)[3] + score(state)[6]),
        (score(state)[1] + score(state)[4] + score(state)[7]),
        (score(state)[2] + score(state)[5] + score(state)[8]),
        (score(state)[0] + score(state)[4] + score(state)[8]),
        (score(state)[2] + score(state)[4] + score(state)[6])
    ]
    let gameState = {win: false, winner: 0};

    for (let element of winCases) {
        if (element === 3) {
            gameState = {win: true, winner: 1}
            break;
        }
        else if (element === -3){
            gameState = {win: true, winner: 2}
            break;
        }
    }

    return gameState
}

export default (state : any, action: any) => {
    switch (action.type){
        case CHANGE_GRID_ITEM_STATE:
            state[`field_${action.payload.gridID}`] = action.payload.gridValue
            const updatedState: any =  {...state, turnCount: state.turnCount + 1, playerTurn: !state.playerTurn}
            console.log('check winner',checkWinner(updatedState))
            updatedState.win = checkWinner(updatedState).win
            updatedState.winner = checkWinner(updatedState).winner
            if( state.turnCount + 1 === 9 ||  checkWinner(updatedState).win){
                updatedState.isGameOver = true
            }
            return updatedState
        case RESTART_GAME:
            return {
                ...state,
                winner:0,
                win: false,
                turnCount: 0,
                isGameOver: false,
                field_1: false,
                field_2: false,
                field_3: false,
                field_4: false,
                field_5: false,
                field_6: false,
                field_7: false,
                field_8: false,
                field_9: false,
                playerTurn: true,
            }
        case CHANGE_COLOR_SCHEME:
            return {...state,
                playerColorScheme: action.payload
            }
        case CHANGE_GAME_MODE:
            return {
                ...state,
                gameMode: !state.gameMode
            }
        default:
            return{
                ...state
            }
    }
};
