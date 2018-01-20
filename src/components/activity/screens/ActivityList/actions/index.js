import moment from 'moment';

import { GET_ACTIVITY_LIST } from './types';
import { executeSql } from 'yasav/src/Database';


export function getActivityList() {
  return (dispatch, getState) => {
    executeSql('SELECT title, description, activity_date FROM activity')
    .then(res => {
      let activityList = res.rows._array.map(activity => ({
        title: activity.title,
        description: activity.description,
        date: moment(activity.activity_date),
      }))
      dispatch({ type: GET_ACTIVITY_LIST, activityList })
    })
  }
}
