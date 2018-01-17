import { GET_TODO_LIST } from './types';
import db, { executeSql } from 'yasav/src/Database';
import { StatusEnum } from 'yasav/src/const';


export function getTodoList() {
  return (dispatch, getState) => {
    executeSql('SELECT * FROM todo')
    .then((res) => {
      // mapping the todo from the DB into the store
      let todoList = res.rows._array.map(todo => ({
        title: todo.title,
        status: todo.status,
        activityId: todo.activity_id,
        dueDate: todo.due_date,
        key: todo.id,
      }));
      dispatch({ type: GET_TODO_LIST, todoList });
    });
  };
}
