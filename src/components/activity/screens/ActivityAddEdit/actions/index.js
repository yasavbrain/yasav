import moment from 'moment';

import { ADD_ACTIVITY, EDIT_ACTIVITY, ADD_TAGS, GET_TAG_LIST } from './types';
import { executeSql } from 'yasav/src/Database';
import { ActivityTypeEnum } from 'yasav/src/const';

export function addTags(tags) {
  return (dispatch, getState) => {
    if(tags && tags.length > 0){
      newTags = tags
      request = 'SELECT * FROM tag  WHERE '
      searchParams = []
      newTags.forEach((tag) => {
        request += 'slug = ? OR '
        searchParams = searchParams.concat(tag.slug)
      })

      request = request.substr(0,request.length-3)
      return executeSql(request, searchParams)
      .then((res) => {
        let ids = []
        res.rows._array.forEach(t => {
          newTags = newTags.filter( tagToFilter => tagToFilter.slug !== t.slug )
          ids = ids.concat(t.id)
        })
        let promises = []
        request = "INSERT INTO tag (name, slug) VALUES (?, ?)"
        newTags.forEach(tag => {
          promises = promises.concat(executeSql(request, [tag.value, tag.slug]))
        })

        return Promise.all(promises)
          .then (results => {
            ids = ids.concat(results.map(i => i.insertId))
            return ids
          });
      });
    } else {
      return new Promise((resolve, reject) => resolve([]));
    }
  }
}

export function getTags() {
  return (dispatch, getState) => executeSql(
    `SELECT id, name, slug 
    FROM tag`)
    .then((res) => {
      const tagList = res.rows._array.map(tag => ({
        name: tag.name,
        slug: tag.slug,
        id: tag.id,
      }));
      dispatch({ type: GET_TAG_LIST, tagList });
    });
}

export function addActivity(activity, tagsId, interlocutorId) {
  return (dispatch, getState) => {
    let request;
    let params;
    switch (activity.type) {
      case ActivityTypeEnum.CONTENT:
        request =
        `INSERT INTO
        activity(title, description, type, activity_date, visible, content_source)
        VALUES (?, ?, ${ActivityTypeEnum.CONTENT}, ?, 1, ?);`;
        params = [activity.title, activity.description, activity.date, activity.contentSource];
        break;

      case ActivityTypeEnum.MEETING:
        request =
        `INSERT INTO
        activity(title, description, type, activity_date, visible, interlocutor_id)
        VALUES (?, ?, ${ActivityTypeEnum.MEETING}, ?, 1, ?);`;
        params = [activity.title, activity.description, activity.date, interlocutorId];
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
      .then(({ insertId }) => {
        promises = []
        tagsId.forEach(tagId => promises = promises.concat(executeSql('INSERT INTO activity_tag(activity_id, tag_id) VALUES ('+insertId+', '+tagId+')'))
        )
        Promise.all(promises)
        .then(result => {
          const activityWithId = { ...activity, id: insertId };
          dispatch({ type: ADD_ACTIVITY, activity: activityWithId });
        })
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
