import {combineReducers, createStore} from "redux";
import {startValueReducer} from "./startValue-reducer";
import {maxValueReducer} from "./maxValue-reducer";

const rootReducer = combineReducers({
    startValue: startValueReducer,
    maxValue: maxValueReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)