import { ADD_ACTIVITY } from '../screens/ActivityAdd/actions/types';

const initialState = {
  activityList: [],
}

export default function reducer(state = initialState, action) {

  switch(action.type) {

    case ADD_ACTIVITY:
      return {...state, activityList: state.activityList.concat(action.activity)};

    default:
      return state;
  }
}
