import { ADD_TODO } from '../screens/TodoAdd/actions/types';

const initialState = {
  todoList: [],
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case ADD_TODO:
      break;

    default:
      return state
  }
}
