import {CHANGE_GRID_ITEM_STATE,RESTART_GAME} from './Types'

export default (state : any, action: any) => {
    switch (action.type){
        case CHANGE_GRID_ITEM_STATE:
            console.log('payload', action.payload)
            switch (action.payload.gridID) {
                case 1:
                    return {
                        ...state,
                        turnCount: state.turnCount + 1,
                        field_1: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 2:
                    return {
                        ...state,
                        turnCount: state.turnCount + 1,
                        field_2: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 3:
                    return {
                        ...state,
                        turnCount: state.turnCount + 1,
                        field_3: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 4:
                    return {
                        ...state,
                        turnCount: state.turnCount + 1,
                        field_4: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 5:
                    return {
                        ...state,
                        turnCount: state.turnCount + 1,
                        field_5: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 6:
                    return {
                        ...state,
                        turnCount: state.turnCount + 1,
                        field_6: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 7:
                    return {
                        ...state,
                        turnCount: state.turnCount + 1,
                        field_7: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 8:
                    return {
                        ...state,
                        turnCount: state.turnCount + 1,
                        field_8: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 9:
                    return {
                        ...state,
                        turnCount: state.turnCount + 1,
                        field_9: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                default:
                    return {
                        ...state
                    }
            }
        case RESTART_GAME:
            return {
                turnCount: 0,
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
