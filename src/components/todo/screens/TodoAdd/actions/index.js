import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './types';
import db, { executeSql } from 'yasav/src/Database';
import { StatusEnum } from 'yasav/src/const';


export function toggleTodo(todo) {
  return (dispatch) => {
    const newTodoStatus = todo.status === StatusEnum.TODO ? StatusEnum.DONE : StatusEnum.TODO;
    return executeSql(
      'UPDATE todo SET status=? WHERE id=?',
      [newTodoStatus, todo.key],
    )
      .then(() => {
        dispatch({ type: TOGGLE_TODO, todo });
      });
  };
}

export function addTodo(todo) {
  return (dispatch) => {
    executeSql(
      'INSERT INTO todo (title, status) values (?, ?)',
      [todo.title, StatusEnum.TODO],
    )
      .then(() => {
        dispatch({ type: ADD_TODO, todo });
      });
  };
}

export function deleteTodo(todoId) {
  return (dispatch) => {
    return executeSql(
      'DELETE FROM todo WHERE id = ?',
      [todoId],
    )
      .then(() => {
        dispatch({ type: DELETE_TODO, todoId: todoId });
      });
  };
}
