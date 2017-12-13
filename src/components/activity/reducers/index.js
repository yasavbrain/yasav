import { ADD_ACTIVITY } from '../screens/ActivityAdd/actions/types';

// To be deleted when activity add is working
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const initialState = {
  activityList: [{
    title: "Activité 1",
    description: "Description de l'activité 1",
    date: moment()
  }, 
  {
    title: "Activité 2",
    description: "Description de l'activité 2",
    date: moment()
  },
  {
    title: "Activité 3",
    description: "Description de l'activité 3",
    date: moment()
  }],
}

// To be uncommented when activit add is working
/*
const initialState = {
  activityList: [],
}
*/
export default function reducer(state = initialState, action) {

  switch(action.type) {

    case ADD_ACTIVITY:
      return {...state, activityList: state.activityList.concat(action.activity)};

    default:
      return state;
  }
}
