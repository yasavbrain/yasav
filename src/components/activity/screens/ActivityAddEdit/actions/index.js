import moment from 'moment';

import { ADD_ACTIVITY, EDIT_ACTIVITY, GET_ACTIVITY_BY_ID } from './types';
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

export function getActivityFromId(id) {
  return dispatch => executeSql(`
      SELECT activity.id as a_id, activity.title, activity.description, activity.activity_date, activity.content_source, activity.type, activity.interlocutor_id, interlocutor.name, interlocutor.link_to_me
      FROM activity 
      LEFT JOIN interlocutor 
      ON activity.interlocutor_id = interlocutor.id
      WHERE activity.id = ?
    `, [id]).then((res) => {
    const activity = res.rows._array.map(row => ({
      activity: {
        id: row.a_id,
        type: row.type,
        title: row.title,
        description: row.description,
        date: moment(row.activity_date),
        contentSource: row.content_source,
      },
      interlocutor: {
        id: row.interlocutor_id,
        name: row.name,
        linkToMe: row.link_to_me,
      },
    }))[0];
    dispatch({ type: GET_ACTIVITY_BY_ID, activity });
  });
}
