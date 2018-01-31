import moment from 'moment';

import { GET_ACTIVITY_LIST } from './types';
import { executeSql } from 'yasav/src/Database';


export function getActivityList() {
  return (dispatch) => {
    executeSql(`
      SELECT activity.id as a_id, activity.title, activity.description, activity.activity_date, activity.content_source, activity.type, activity.interlocutor_id, interlocutor.name, interlocutor.link_to_me
      FROM activity 
      LEFT JOIN interlocutor 
      ON activity.interlocutor_id = interlocutor.id
    `).then((res) => {
      const activityList = res.rows._array.map(row => ({
        activity: {
          id: row.a_id,
          type: row.type,
          title: row.title,
          description: row.description,
          date: moment(row.activity_date),
          contentSource: row.content_source,
          interlocutorKey: row.interlocutor_id,
        },
        interlocutor: {
          id: row.interlocutor_id,
          name: row.name,
          linkToMe: row.link_to_me,
        },
      }));
      dispatch({ type: GET_ACTIVITY_LIST, activityList });
    });
  };
}
