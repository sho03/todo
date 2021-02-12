import {Task} from "../domain/Task";
import {ActionTypes, ADD_TODO, GET_LIST} from "./types";

export function addTodo(task: Task): ActionTypes {
    return {
        type: ADD_TODO,
        payload: task
    }
}

export function getList(): ActionTypes {
    return {
        type: GET_LIST
    }
}