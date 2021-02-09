import {ActionTypes, ADD_TODO, GET_LIST} from "./types";
import {TodoState} from "./store";

const initialState = {
    tasks: null
}

export const taskReducer = (state: TodoState = initialState, action: ActionTypes): TodoState => {
    console.log(state)
    switch(action.type) {
        case GET_LIST:
            return {
                ...state
            }
        case ADD_TODO:
            console.log("add todo!")
            console.log(action)
            const prevTasks = state.tasks === null ? [] : state.tasks
            return {
                ...state,
                tasks: prevTasks.concat(action.payload)
            }
        default:
            return {
                ...state
            }
    }
}