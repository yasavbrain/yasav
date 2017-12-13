import { ADD_ACTIVITY } from '../screens/ActivityAdd/actions/types';

const initialState = {
  activityList: [],
  lastID: 0
}
export default function reducer(state = initialState, action) {

  switch(action.type) {

    case ADD_ACTIVITY:
      // Checker cette histoire de lastID. IL a pas l'air d'être vraiment incrémenté.
      return {...state, activityList: state.activityList.concat(action.activity), lastID: state.lastID + 1};

    default:
      return state;
  }
}
