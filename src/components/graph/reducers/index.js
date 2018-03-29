import { GET_ALL_WEIGHTED_TAGS } from '../screens/GraphTagDisplay/actions/types';
import {
  GET_ADJACENT_ACTIVITIES_FROM_TAG,
  GET_ADJACENT_ACTIVITIES_FROM_INTERLOCUTOR,
  GET_ADJACENT_TAGS_FROM_ACTIVITY,
  GET_ADJACENT_INTERLOCUTORS_FROM_ACTIVITY,
} from '../screens/GraphActivityDisplay/actions/types';

const initialState = {
  weightedTagList: [],
  adjacentActivitiesList: [],
  adjacentTagsList: [],
  adjacentInterlocutorsList: [],
  centerNodeType: null,
  centerNodeId: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_WEIGHTED_TAGS:
      return { ...state, weightedTagList: action.weightedTagList };

    case GET_ADJACENT_ACTIVITIES_FROM_TAG:
      return {
        ...state,
        adjacentActivitiesList: action.activities,
        centerNodeType: action.centerNodeType,
        centerNodeId: action.centerNodeId,
      };

    case GET_ADJACENT_ACTIVITIES_FROM_INTERLOCUTOR:
      return {
        ...state,
        adjacentActivitiesList: action.activities,
        centerNodeType: action.centerNodeType,
        centerNodeId: action.centerNodeId,
      };

    case GET_ADJACENT_TAGS_FROM_ACTIVITY:
      return {
        ...state,
        adjacentTagsList: action.tags,
        centerNodeType: action.centerNodeType,
        centerNodeId: action.centerNodeId,
      };

    case GET_ADJACENT_INTERLOCUTORS_FROM_ACTIVITY:
      return {
        ...state,
        adjacentInterlocutorsList: action.interlocutors,
        centerNodeType: action.centerNodeType,
        centerNodeId: action.centerNodeId,
      };

    default:
      return state;
  }
}
