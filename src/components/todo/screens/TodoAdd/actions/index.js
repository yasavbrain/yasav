import { ADD_TODO, TOGGLE_TODO } from './types';
import db, { executeSql } from 'yasav/src/Database';
import { StatusEnum } from 'yasav/src/const';


export function toggleTodo(todo) {
  return (dispatch, getState) => {
    let newTodoStatus = todo.status === StatusEnum.TODO ? StatusEnum.DONE : StatusEnum.TODO;
    return executeSql(
      'UPDATE todo SET status=? WHERE id=?',
      [newTodoStatus, todo.key]
    )
    .then(() => {
      dispatch({ type: TOGGLE_TODO, todo })
    });
  };
}

export function addTodo(todo) {
  return (dispatch, getState) => {
    executeSql(
      `INSERT INTO todo (title, status) values (?, ?)`,
      [todo.title, StatusEnum.TODO]
    )
    .then(res => {
      dispatch({ type: ADD_TODO, todo });
    })
  };
}
