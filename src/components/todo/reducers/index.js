import { ADD_TODO, TOGGLE_TODO } from '../screens/TodoAdd/actions/types';
import { StatusEnum } from 'yasav/src/const';

const initialState = {
  todoList: [],
  lastID: 0,
}

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case ADD_TODO:
      let newID = state.lastID + 1;
      return {...state, todoList: state.todoList.concat(action.todo), lastID: newID};

    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.key === action.todo.key) {
            if (action.todo.status === StatusEnum.TODO) {
              return {...todo, status: StatusEnum.DONE}
            } else {
              return {...todo, status: StatusEnum.TODO}
            }
          }
          return todo;
        })
      };

    default:
      return state
  }
}
