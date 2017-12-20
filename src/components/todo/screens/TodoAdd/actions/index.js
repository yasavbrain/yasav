import { ADD_TODO } from './types';

export function addTodo(todo) {
  return { type: ADD_TODO, todo: todo }
}