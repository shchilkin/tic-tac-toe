import {CHANGE_GRID_ITEM_STATE,RESTART_GAME} from './Types'

export default (state : any, action: any) => {
    switch (action.type){
        case CHANGE_GRID_ITEM_STATE:
            state[`field_${action.payload.gridID}`] = action.payload.gridValue
            return {
                ...state,
                turnCount: state.turnCount + 1,
                playerTurn: !state.playerTurn
            }
        case RESTART_GAME:
            return {
                ...state,
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
        default:
            return{
                ...state
            }
    }
};
