import {ChangeEvent} from "react";


let initialState: number = 1

export const startValueReducer = (state = initialState, action: ActionType): number => {
    switch (action.type) {
        case 'CHANGE-START-VALUE': {
            // let copyState: number = ...state
            state = Number(action.value)
            return state
        }
        default:
            return state
    }

}

export const changeStartValueAC = (e: ChangeEvent<HTMLInputElement>): changeStartValueACReturnType => {
    return {
        type: 'CHANGE-START-VALUE',
        value: e.currentTarget.value
    }
}

type changeStartValueACReturnType = {
    type: string
    value: string
}


type ActionType = changeStartValueACReturnType