// To be deleted when activity add is working

import moment from 'moment';
import 'moment/locale/fr';

import { ADD_INTERLOCUTOR } from '../screens/InterlocutorAdd/actions/types';
import { GET_INTERLOCUTOR_LIST } from '../screens/InterlocutorList/actions/types';
import { GET_INTERLOCUTOR_ACTIVITY } from '../screens/InterlocutorDisplay/actions/types';


moment.locale('fr');

const initialState = {
  activityList: [],
  interlocutorList: [],
  lastID: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INTERLOCUTOR:
      const newID = state.lastID + 1;
      return { ...state, interlocutorList: state.interlocutorList.concat(action.interlocutor), lastID: newID };

    case GET_INTERLOCUTOR_LIST:
      return { ...state, interlocutorList: action.interlocutorList };

    case GET_INTERLOCUTOR_ACTIVITY:
      // console.log(action.interlocutorActivityList)
      return { ...state, activityList: action.interlocutorActivityList };

    default:
      return state;
  }
}
