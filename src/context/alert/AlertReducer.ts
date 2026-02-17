import type { State, Action } from "./types"

export const alertReducer = (state:State, action:Action) => {
    switch(action.type){
        case "SET_ALERT":
            return action.payload
        case "REMOVE_ALERT":
            return null
        default:
            return state
    }
}