import {Task} from "../domain/Task";

export const ADD_TODO = "ADD_TODO";
export const GET_LIST = "GET_LIST";

interface AddTodoAction {
    type: typeof ADD_TODO
    payload: Task
};

interface GetListAction {
    type: typeof GET_LIST
}

export type ActionTypes = AddTodoAction | GetListAction;