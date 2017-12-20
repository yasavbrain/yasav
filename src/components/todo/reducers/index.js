import { ADD_TODO } from '../screens/TodoAdd/actions/types';

const initialState = {
  todoList: [],
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO:
      return {...state, todoList: state.todoList.concat(action.todo)};
    default:
      return state
  }
}