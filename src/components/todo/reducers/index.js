import { ADD_TODO } from '../screens/TodoAdd/actions/types';

const initialState = {
  todoList: [],
  lastID: 0,
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO:
      let newID = state.lastID + 1;
      return {...state, todoList: state.todoList.concat(action.todo), lastID: newID};
    default:
      return state
  }
}
