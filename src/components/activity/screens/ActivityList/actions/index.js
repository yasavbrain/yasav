import moment from 'moment';

import { GET_ACTIVITY_LIST, GET_ACTIVITY_LIST_FROM_REQUEST } from './types';
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

export function getActivityListFromRequest(request) {
  if (request.length > 0) {
    const requestList = request.split(' ');
    for (var i = requestList.length; i--;) {
      if (requestList[i] === '') { requestList.splice(i, 1) };
    }
    return (dispatch, getState) => {
      let promises = [];
      requestSql = `SELECT id, title, description, activity_date, content_source, type, interlocutor_id
      FROM activity
      WHERE title LIKE ?
      OR description LIKE ?`;
      requestList.forEach((term) => {
        if (term.length > 0) {
          promises = promises.concat(executeSql(requestSql, [`%${  term  }%`, `%${  term  }%`]));
        }
      });
      return Promise.all(promises)
        .then((res) => {
          let activityListFrequency = {}; // Key : activity_id ; Value : [activity object, frequency]
          let indexTermRequest = 0;
          res.forEach((r) => {
            const regex = new RegExp(requestList[indexTermRequest].toLowerCase(),"g");
            r.rows._array.forEach((activity) => {
              let frequencyActivity = (activity.title.toLowerCase().match(regex) || []).length + (activity.description.toLowerCase().match(regex) || []).length;
              if (activity.id in activityListFrequency) {
                activityListFrequency[activity.id][1] += 1 + Math.log(frequencyActivity);
              } else {
                activityListFrequency[activity.id] = [{
                  activity: {
                    id: activity.id,
                    title: activity.title,
                    description: activity.description,
                    activity_date: activity.activity_date,
                    content_source: activity.content_source,
                    type: activity.type,
                    interlocutor_id: activity.interlocutor_id,
                  },
                }, 1 + Math.log(frequencyActivity)];
              }
            });
            indexTermRequest += 1;
          });
          // Create an array based on the dictionnary activityListFrequency
          const activityListFrequencyArray = Object.keys(activityListFrequency).map(key => [key, activityListFrequency[key][0], activityListFrequency[key][1]]);
          let activityListFromRequest = [];

          // Fill the activityListFromRequest by a list of tuple (activity object, frequency)
          activityListFrequencyArray.forEach((activity) => {
            activityListFromRequest = activityListFromRequest.concat([[activity[1],activity[2]]]);
          });
          dispatch({ type: GET_ACTIVITY_LIST_FROM_REQUEST, activityListFromRequest });
        });
    };
  }
  else {
    const activityListFromRequest = [];
    return dispatch => dispatch({ type: GET_ACTIVITY_LIST_FROM_REQUEST, activityListFromRequest });
  }
}
