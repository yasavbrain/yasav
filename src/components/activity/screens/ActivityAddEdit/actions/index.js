import { ADD_ACTIVITY } from './types';
import { executeSql } from 'yasav/src/Database';
import { ActivityTypeEnum } from 'yasav/src/const';

export function addActivity(activity, interlocutorId) {
  return (dispatch, getState) => {

    let request;
    let params;
    switch (activity.type) {
      case ActivityTypeEnum.CONTENT:
        request =
        `INSERT INTO
        activity(title, description, type, activity_date, visible, content_source, interlocutor_id)
        VALUES (?, ?, ${ActivityTypeEnum.CONTENT}, ?, 1, ?, ?);`;
        params = [activity.title, activity.description, activity.date, activity.contentSource, interlocutorId];
        break;

      case ActivityTypeEnum.MEETING:
        request =
        `INSERT INTO
        activity(title, description, type, activity_date, visible)
        VALUES (?, ?, ${ActivityTypeEnum.CONTENT}, ?, 1);`;
        params = [activity.title, activity.description, activity.date];
        break;

      case ActivityTypeEnum.EVENT:
        request =
        `INSERT INTO
        activity(title, description, type, activity_date, visible)
        VALUES (?, ?, ${ActivityTypeEnum.CONTENT}, ?, 1);`;
        params = [activity.title, activity.description, activity.date];
        break;
      default:
        request = '';
        params = null;

    }
    executeSql(request, params)
    .then(() => {
      dispatch({ type: ADD_ACTIVITY, activity });
    })
  }
}
