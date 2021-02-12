import {Task} from "../domain/Task";
import {} from "react-redux";
import {combineReducers, createStore} from "redux"
import {taskReducer} from "./reducer";

export type AppState = {
    todo: TodoState
}

export interface TodoState {
    tasks: Task[] | null
}

const Store = createStore(combineReducers<AppState>({
    todo: taskReducer
}))

export default Store