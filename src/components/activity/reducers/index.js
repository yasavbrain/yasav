import { ADD_ACTIVITY } from 'src/components/activity/screens/ActivityAdd/actions/types';

const initialState = {
  activityList: [],
}

export default function reducer(state = initialState, action) {

  switch(action.type) {

    case ADD_ACTIVITY:
      const ret = {...state, activityList: state.activityList.concat(action.activity)}
      return ret;

    default:
      return state;
  }
}
