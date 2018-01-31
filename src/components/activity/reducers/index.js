import { ADD_ACTIVITY, EDIT_ACTIVITY, GET_ACTIVITY_BY_ID } from '../screens/ActivityAddEdit/actions/types';
import { GET_ACTIVITY_LIST } from '../screens/ActivityList/actions/types';

// To be deleted when activity add is working
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const initialState = {
  activityList: [],
  activityDisplay: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return { ...state, activityList: state.activityList.concat({ activity: action.activity, interlocutor: null }) };

    case EDIT_ACTIVITY:
      return {
        ...state,
        activityList: state.activityList.map((activity) => {
          if (activity.id === action.activity.id) {
            return action.activity;
          }
          return activity;
        }),
      };

    case GET_ACTIVITY_LIST:
      return { ...state, activityList: action.activityList };

    case GET_ACTIVITY_BY_ID:
      return { ...state, activityDisplay: action.activity };
    default:
      return state;
  }
}
