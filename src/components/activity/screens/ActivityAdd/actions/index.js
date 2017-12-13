import { ADD_ACTIVITY } from './types';

export function addActivity(activity) {
  return { type: ADD_ACTIVITY, activity: activity }
}
