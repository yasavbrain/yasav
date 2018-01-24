import { combineReducers } from 'redux';

import activity from 'src/components/activity/reducers';
import todo from 'src/components/todo/reducers';
import interlocutor from 'src/components/interlocutor/reducers';

export default combineReducers({
  activity,
  todo,
  interlocutor,
});
