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
  if (request.length > 0) {
    requestList = request.split(' ');
    return (dispatch, getState) => {
      let promises = [];
      request = `SELECT name, link_to_me, id 
      FROM interlocutor
      WHERE name LIKE ? OR link_to_me LIKE ?`;
      requestList.forEach((term) => {
        if (term.length > 0) {
          promises = promises.concat(executeSql(request, [`%${  term  }%`, `%${  term  }%`]));
        }
      });
      return Promise.all(promises)
        .then((res) => {
          let interlocutorListFrequency = {}; // Key : interlocutor_id ; Value : [interlocutor object, frequency]
          res.forEach((r) => {
            r.rows._array.forEach((interlocutor) => {
              if (interlocutor.id in interlocutorListFrequency) {
                interlocutorListFrequency[interlocutor.id][1] += 1;
              } else {
                interlocutorListFrequency[interlocutor.id] = [{
                  interlocutor: {
                    name: interlocutor.name,
                    link_to_me: interlocutor.link_to_me,
                    id: interlocutor.id,
                  },
                },1];
              }
            });
          });
          // Create an array based on the dictionnary activityListFrequency
          const interlocutorListFrequencyArray = Object.keys(interlocutorListFrequency).map(key => [key, interlocutorListFrequency[key][0], interlocutorListFrequency[key][1]]);
          let interlocutorListFromRequest = [];

          // Fill the activityListFromRequest by a list of tuple (interlocutor object, frequency)
          interlocutorListFrequencyArray.forEach((interlocutor) => {
            interlocutorListFromRequest = interlocutorListFromRequest.concat([[interlocutor[1],interlocutor[2]]]);
          });
          dispatch({ type: GET_INTERLOCUTOR_LIST_FROM_REQUEST, interlocutorListFromRequest });
        });
    };
  }
  const interlocutorListFromRequest = [];
  return dispatch => dispatch({ type: GET_INTERLOCUTOR_LIST_FROM_REQUEST, interlocutorListFromRequest });
}