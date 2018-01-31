import moment from 'moment';

import { ADD_ACTIVITY, EDIT_ACTIVITY } from './types';
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
        VALUES (?, ?, ${ActivityTypeEnum.MEETING}, ?, 1);`;
        params = [activity.title, activity.description, activity.date];
        break;

      case ActivityTypeEnum.EVENT:
        request =
        `INSERT INTO
        activity(title, description, type, activity_date, visible)
        VALUES (?, ?, ${ActivityTypeEnum.EVENT}, ?, 1);`;
        params = [activity.title, activity.description, activity.date];
        break;
      default:
        request = '';
        params = null;
    }
    executeSql(request, params)
      .then(() => {
        dispatch({ type: ADD_ACTIVITY, activity });
      });
  };
}

export function editActivity(activity, interlocutorId) {
  return (dispatch) => {
    let request;
    let params;
    request = 'UPDATE activity ';
    switch (activity.type) {
      case ActivityTypeEnum.CONTENT:
        request +=
        `SET title = ?, description = ?, type = ${ActivityTypeEnum.CONTENT}, 
        activity_date = ?, visible = 1, content_source = ?, interlocutor_id = ?`;
        params = [activity.title, activity.description, activity.date, activity.contentSource, interlocutorId, activity.id];
        break;

      case ActivityTypeEnum.MEETING:
        request +=
        `SET title = ?, description = ?, type = ${ActivityTypeEnum.MEETING}, 
        activity_date = ?, visible = 1`;
        params = [activity.title, activity.description, activity.date, activity.id];
        break;

      case ActivityTypeEnum.EVENT:
        request +=
        `SET title = ?, description = ?, type = ${ActivityTypeEnum.EVENT}, 
        activity_date = ?, visible =1`;
        params = [activity.title, activity.description, activity.date, activity.id];
        break;
      default:
        request = '';
        params = null;
    }
    request += ' WHERE id = ?;';
    executeSql(request, params)
      .then(() => {
        dispatch({ type: EDIT_ACTIVITY, activity });
      });
  };
}
