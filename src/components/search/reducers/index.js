import moment from 'moment';
import 'moment/locale/fr';

import { GET_INTERLOCUTOR_LIST_FROM_REQUEST } from '../../interlocutor/screens/InterlocutorList/actions/types';
import { GET_ACTIVITY_LIST_FROM_REQUEST } from '../../activity/screens/ActivityList/actions/types';


moment.locale('fr');

const initialState = {
  interlocutorListFromRequest: [],
  activityListFromRequest: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_INTERLOCUTOR_LIST_FROM_REQUEST:
      return { ...state, interlocutorListFromRequest: action.interlocutorListFromRequest };
    case GET_ACTIVITY_LIST_FROM_REQUEST:
      return { ...state, activityListFromRequest: action.activityListFromRequest };
    default:
      return state;
  }
}
