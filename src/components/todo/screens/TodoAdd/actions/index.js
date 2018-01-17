import { ADD_TODO, TOGGLE_TODO } from './types';
import db, { executeSql } from 'yasav/src/Database';


export function toggleTodo(id) {
  return { type: TOGGLE_TODO, todo_id : id }
}

export function addTodo(todo) {
  return (dispatch, getState) => {

    executeSql(`INSERT INTO todo (title, status) values (?, ?)`, [todo.title, todo.completed])
    .then(res => {
      dispatch({ type: ADD_TODO, todo: todo });
      executeSql(`SELECT * from todo`)
      .then(res => console.log(res))
    })
  };
}
