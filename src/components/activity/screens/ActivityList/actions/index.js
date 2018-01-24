import moment from 'moment';

import { GET_ACTIVITY_LIST } from './types';
import { executeSql } from 'yasav/src/Database';


export function getActivityList() {
  return (dispatch) => {
    executeSql(`
      SELECT activity.title, activity.description, activity.activity_date, activity.content_source, activity.type, 
      interlocutor.name, interlocutor.link_to_me
      FROM activity 
      LEFT JOIN interlocutor 
      ON activity.interlocutor_id = interlocutor.id
    `).then((res) => {
      console.log('LOLOLOPL');
      console.log(res.rows);
      const activityList = res.rows._array.map(activity => ({
        activity: {
          id: activity.id,
          type: activity.type,
          title: activity.title,
          description: activity.description,
          date: moment(activity.activity_date),
        },
        interlocutor: {
          name: activity.name,
          linkToMe: activity.link_to_me,
        },
      }));
      dispatch({ type: GET_ACTIVITY_LIST, activityList });
    });
  };
}