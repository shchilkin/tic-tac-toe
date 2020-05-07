import {CHANGE_GRID_ITEM_STATE} from './Types'

export default (state : any, action: any) => {
    switch (action.type){
        case CHANGE_GRID_ITEM_STATE:
            console.log('payload', action.payload)
            switch (action.payload.gridID) {
                case 1:
                    return {
                        ...state,
                        field_1: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 2:
                    return {
                        ...state,
                        field_2: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 3:
                    return {
                        ...state,
                        field_3: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 4:
                    return {
                        ...state,
                        field_4: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 5:
                    return {
                        ...state,
                        field_5: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 6:
                    return {
                        ...state,
                        field_6: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 7:
                    return {
                        ...state,
                        field_7: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 8:
                    return {
                        ...state,
                        field_8: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                case 9:
                    return {
                        ...state,
                        field_9: action.payload.gridValue,
                        playerTurn: !state.playerTurn
                    }
                default:
                    return {
                        ...state
                    }
            }
        default:
            return{
                ...state
            }
    }
};
