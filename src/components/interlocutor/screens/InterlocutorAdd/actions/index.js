import { ADD_INTERLOCUTOR } from './types';
import { executeSql } from 'yasav/src/Database';


export function addInterlocutor(interlocutor) {
  return (dispatch, getState) => {
    return executeSql(`INSERT INTO
      interlocutor(name, link_to_me)
      VALUES(?, ?);`,
    [interlocutor.name, interlocutor.linkToMe])
    .then(({ insertId }) => {
      dispatch({ type: ADD_INTERLOCUTOR, interlocutor: interlocutor });
      return insertId
    })
  }
}
