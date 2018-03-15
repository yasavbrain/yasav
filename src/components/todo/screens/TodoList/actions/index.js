import { GET_TODO_LIST } from './types';
import { executeSql } from 'yasav/src/Database';
import { StatusEnum } from 'yasav/src/const';


export function getTodoList() {
  return (dispatch, getState) => {
    return executeSql('SELECT * FROM todo ORDER BY status, id')
    .then((res) => {
      // mapping the todo from the DB into the store
      let todoList = res.rows._array.map(todo => ({
        title: todo.title,
        status: todo.status,
        activityId: todo.activity_id,
        dueDate: todo.due_date,
        id: todo.id,
      }));
      dispatch({ type: GET_TODO_LIST, todoList });
    });
  };
}
