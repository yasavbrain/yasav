import { GET_INTERLOCUTOR_LIST } from './types';
import { executeSql } from 'yasav/src/Database';

export function getInterlocutorList() {
  return (dispatch, getState) => {
    executeSql('SELECT name, link_to_me FROM interlocutor')
    .then(res => {
      let interlocutorList = res.rows._array.map(interlocutor => ({
        name: interlocutor.name,
        link_to_me: interlocutor.link_to_me,
      }))
      dispatch({ type: GET_INTERLOCUTOR_LIST, interlocutorList})
    })
  }
}