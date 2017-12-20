import { ADD_ACTIVITY } from '../screens/ActivityAdd/actions/types';

// To be deleted when activity add is working
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const initialState = {
  activityList: [],
  lastID: 0
}

export default function reducer(state = initialState, action) {

  switch(action.type) {

    case ADD_ACTIVITY:
      let newID = state.lastID + 1;
      return {...state, activityList: state.activityList.concat(action.activity), lastID: newID};

    default:
      return state;
  }
}
