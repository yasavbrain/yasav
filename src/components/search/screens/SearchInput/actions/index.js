import { GET_INTERLOCUTOR_FROM_REQUEST } from './types';
import { executeSql } from 'yasav/src/Database';

export function getInterlocutorFromRequest(request) {
  //console.log('yes')
  return (dispatch, getState) => executeSql(
    `SELECT name, link_to_me, id 
     FROM interlocutor 
     WHERE name LIKE'%?%'`,
    [request],
)
    //console.log(res)
    .then((res) => {
      const interlocutorFromRequest = res.rows._array.map(interlocutor => ({
        name: interlocutor.name,
        link_to_me: interlocutor.link_to_me,
        id: interlocutor.id,
      }));
      dispatch({ type: GET_INTERLOCUTOR_FROM_REQUEST, interlocutorFromRequest });
    });
}