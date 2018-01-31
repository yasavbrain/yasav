import { GET_INTERLOCUTOR_ACTIVITY } from './types';
import { executeSql } from 'yasav/src/Database';

export function getInterlocutorActivity(interlocutor_id) {
  return (dispatch, getState) => {
    executeSql('SELECT title, description FROM activity WHERE interlocutor_id = ?',[interlocutor_id])
    .then(res => {
      let interlocutorActivityList = res.rows._array.map(activity => ({
        title: activity.title,
        description: activity.description,
      }))
      //console.log(interlocutorActivityList)
      dispatch({ type: GET_INTERLOCUTOR_ACTIVITY, interlocutorActivityList})
    })
  }
}

//WHERE interlocutor_id = ?