import { ADD_ACTIVITY, EDIT_ACTIVITY, GET_TAG_LIST } from '../screens/ActivityAddEdit/actions/types';
import { GET_ACTIVITY_BY_ID, DELETE_ACTIVITY, GET_TAG_ID } from '../screens/ActivityDisplay/actions/types';
import { GET_ACTIVITY_LIST } from '../screens/ActivityList/actions/types';

// To be deleted when activity add is working
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const initialState = {
  activityList: [],
  activityDisplay: null,
  tagList: [],
  activityDisplaySelectedTag: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return { ...state, activityList: state.activityList.concat({ activity: action.activity, interlocutor: null }) };

    case EDIT_ACTIVITY:
      return {
        ...state,
        activityList: state.activityList.map((row) => {
          if (row.activity.id === action.activity.id) {
            return { activity: action.activity, interlocutor: null };
          }
          return row;
        }),
        activityDisplay: { activity: action.activity, interlocutor: null },
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activityList: state.activityList.filter(activityAndInterlocutor => action.activityId !== activityAndInterlocutor.activity.id),
      };

    case GET_ACTIVITY_LIST:
      return { ...state, activityList: action.activityList };

    case GET_TAG_LIST:
      return { ...state, tagList: action.tagList };

    case GET_TAG_ID:
      return { ...state, activityDisplaySelectedTag: action.tagId }

    case GET_ACTIVITY_BY_ID:
      return { ...state, activityDisplay: action.activity };
    default:
      return state;
  }
}
