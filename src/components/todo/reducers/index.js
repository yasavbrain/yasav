import { StatusEnum } from 'yasav/src/const';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../screens/TodoAdd/actions/types';
import { GET_TODO_LIST } from '../screens/TodoList/actions/types';

const initialState = {
  todoList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoList: state.todoList.concat(action.todo) };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => action.todoId !== todo.key),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.todo.id) {
            if (action.todo.status === StatusEnum.TODO) {
              return { ...todo, status: StatusEnum.DONE };
            }
            return { ...todo, status: StatusEnum.TODO };
          }
          return todo;
        }),
      };

    case GET_TODO_LIST:
      return { ...state, todoList: action.todoList };

    default:
      return state;
  }
}
