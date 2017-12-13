import { ADD_ACTIVITY } from 'src/screens/ActivityAdd/actions/types';

export function addActivity(activity) {
  return { type: ADD_ACTIVITY, activity: activity }
}
