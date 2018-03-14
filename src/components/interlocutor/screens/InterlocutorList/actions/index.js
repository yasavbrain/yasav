import { GET_INTERLOCUTOR_LIST } from './types';
import { GET_INTERLOCUTOR_LIST_FROM_REQUEST } from './types';
import { executeSql } from 'yasav/src/Database';

export function getInterlocutorList() {
  return (dispatch, getState) => executeSql(
    `SELECT name, link_to_me, id 
    FROM interlocutor`)
    .then((res) => {
      const interlocutorList = res.rows._array.map(interlocutor => ({
        name: interlocutor.name,
        link_to_me: interlocutor.link_to_me,
        id: interlocutor.id,
      }));
      dispatch({ type: GET_INTERLOCUTOR_LIST, interlocutorList });
    });
}

export function getInterlocutorListFromRequest(request) {
  if ( request.length > 0 ) {
    return (dispatch, getState) => executeSql(
      `SELECT name, link_to_me, id 
      FROM interlocutor
      WHERE name LIKE ? OR link_to_me LIKE ?`,
      ["%" + request + "%", "%" + request + "%"]
    )
      .then((res) => {
        const interlocutorListFromRequest = res.rows._array.map(interlocutor => ({
          name: interlocutor.name,
          link_to_me: interlocutor.link_to_me,
          id: interlocutor.id,
        }));
        dispatch({ type: GET_INTERLOCUTOR_LIST_FROM_REQUEST, interlocutorListFromRequest });
        return res
      });
  }
  else {
    interlocutorListFromRequest = []
    return (dispatch) => dispatch({ type: GET_INTERLOCUTOR_LIST_FROM_REQUEST, interlocutorListFromRequest });
  }
}
