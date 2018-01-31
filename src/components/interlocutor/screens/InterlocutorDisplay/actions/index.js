import moment from 'moment';

import { GET_INTERLOCUTOR_ACTIVITY_LIST } from './types';
import { executeSql } from 'yasav/src/Database';

export function getInterlocutorActivity(interlocutorId) {
  return (dispatch, getState) => executeSql(
    `SELECT title, description, activity_date, id 
      FROM activity 
      WHERE interlocutor_id = ?`,
    [interlocutorId],
  )
    .then((res) => {
      const interlocutorActivityList = res.rows._array.map(activity => ({
        title: activity.title,
        description: activity.description,
        date: moment(activity.activity_date),
        id: activity.id,
      }));
      dispatch({ type: GET_INTERLOCUTOR_ACTIVITY_LIST, interlocutorActivityList });
    });
}

