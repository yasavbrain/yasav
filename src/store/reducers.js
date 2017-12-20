import { combineReducers } from 'redux';

import activity from 'src/components/activity/reducers/index';
import todo from 'src/components/todo/reducers/index';

export default combineReducers({
  activity,
  todo,
});
