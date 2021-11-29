import {ChangeEvent} from "react";


let initialState: number = 5

export const maxValueReducer = (state = initialState, action: ActionType): number => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE': {
            // let copyState: number = ...state
            state = Number(action.value)
            return state
        }
        default:
            return state
    }

}

export const changeMaxValueAC = (e: ChangeEvent<HTMLInputElement>): changeMaxValueACReturnType => {
    return {
        type: 'CHANGE-MAX-VALUE',
        value: e.currentTarget.value
    }
}

type changeMaxValueACReturnType = {
    type: string
    value: string
}


type ActionType = changeMaxValueACReturnType