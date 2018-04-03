import { executeSql } from 'yasav/src/Database';
import { GraphNodeType } from 'yasav/src/const';
import {
  GET_ADJACENT_ACTIVITIES_FROM_TAG,
  GET_ADJACENT_ACTIVITIES_FROM_INTERLOCUTOR,
  GET_ADJACENT_TAGS_FROM_ACTIVITY,
  GET_ADJACENT_INTERLOCUTORS_FROM_ACTIVITY,
  RESET_CENTER_NODE
} from './types';

export function getAdjacentTagsFromActivity(activityId) {
  return dispatch => executeSql(
    `SELECT name, tag.id as id, activity_tag.id as link_id
    FROM tag, activity_tag
    WHERE tag_id = tag.id AND activity_tag.activity_id = ?`,
    [activityId],
  )
    .then((res) => {
      const tags = res.rows._array.map(tag => ({
        id: tag.id,
        name: tag.name,
        linkId: tag.link_id,
        nodeType: GraphNodeType.TAG,
      }));
      return executeSql('SELECT title, type FROM activity WHERE activity.id = ?', [activityId])
        .then((res2) => {
          dispatch({
            type: GET_ADJACENT_TAGS_FROM_ACTIVITY,
            tags,
            centerNodeType: GraphNodeType.ACTIVITY,
            centerNodeId: activityId,
            centerNodeName: res2.rows._array[0].title,
            centerNodeSubType: res2.rows._array[0].type,
          });
        });
    });
}

export function getAdjacentInterlocutorsFromActivity(activityId) {
  return dispatch => executeSql(
    `SELECT name, interlocutor.id as id, activity.id as activity_id
    FROM activity
      INNER JOIN interlocutor ON activity.interlocutor_id = interlocutor.id
    WHERE activity.id = ?`,
    [activityId],
  )
    .then((res) => {
      const interlocutors = res.rows._array.map(interlocutor => ({
        id: interlocutor.id,
        name: interlocutor.name,
        linkId: interlocutor.activity_id,
        nodeType: GraphNodeType.INTERLOCUTOR,
      }));
      return executeSql('SELECT title, type FROM activity WHERE activity.id = ?', [activityId])
        .then((res2) => {
          dispatch({
            type: GET_ADJACENT_INTERLOCUTORS_FROM_ACTIVITY,
            interlocutors,
            centerNodeType: GraphNodeType.ACTIVITY,
            centerNodeId: activityId,
            centerNodeName: res2.rows._array[0].title,
            centerNodeSubType: res2.rows._array[0].type,
          });
        });
    });
}

export function getAdjacentActivitiesFromInterlocutor(interlocutorId) {
  return dispatch => executeSql(
    `SELECT title, activity.id as id, interlocutor_id, type
    FROM activity
    WHERE interlocutor_id = ?`,
    [interlocutorId],
  )
    .then((res) => {
      const activities = res.rows._array.map(activity => ({
        id: activity.id,
        title: activity.title,
        type: activity.type,
        linkId: activity.interlocutor_id,
        nodeType: GraphNodeType.ACTIVITY,
      }));
      return executeSql('SELECT name FROM interlocutor WHERE interlocutor.id = ?', [interlocutorId])
        .then((res2) => {
          dispatch({
            type: GET_ADJACENT_ACTIVITIES_FROM_INTERLOCUTOR,
            activities,
            centerNodeType: GraphNodeType.INTERLOCUTOR,
            centerNodeId: interlocutorId,
            centerNodeName: res2.rows._array[0].name,
          });
        });
    });
}

export function getAdjacentActivitiesFromTag(tagId) {
  return dispatch => executeSql(
    `SELECT title, activity.id  as id, activity_tag.id as link_id, type
    FROM activity, activity_tag
    WHERE activity.id = activity_tag.activity_id AND activity_tag.tag_id = ?`,
    [tagId],
  )
    .then((res) => {
      const activities = res.rows._array.map(activity => ({
        id: activity.id,
        title: activity.title,
        type: activity.type,
        linkId: activity.link_id,
        nodeType: GraphNodeType.ACTIVITY,
      }));
      return executeSql('SELECT name FROM tag WHERE tag.id = ?', [tagId])
        .then((res2) => {
          dispatch({
            type: GET_ADJACENT_ACTIVITIES_FROM_TAG,
            activities,
            centerNodeType: GraphNodeType.TAG,
            centerNodeId: tagId,
            centerNodeName: res2.rows._array[0].name,
          });
        });
    });
}

export function getAdjacentNodes(nodeId, nodeType) {
  return (dispatch) => {
    switch (nodeType) {
      case GraphNodeType.TAG:
        return dispatch(getAdjacentActivitiesFromTag(nodeId));

      case GraphNodeType.ACTIVITY:
        return dispatch(getAdjacentTagsFromActivity(nodeId))
          .then(() => dispatch(getAdjacentInterlocutorsFromActivity(nodeId)));

      case GraphNodeType.INTERLOCUTOR:
        return dispatch(getAdjacentActivitiesFromInterlocutor(nodeId));

      default:
        return null;
    }
  };
}

export function resetCenterNode() {
  return { type: RESET_CENTER_NODE };
}
