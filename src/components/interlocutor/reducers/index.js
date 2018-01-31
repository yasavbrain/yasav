import { ADD_INTERLOCUTOR } from '../screens/InterlocutorAdd/actions/types';
import { GET_INTERLOCUTOR_LIST } from '../screens/InterlocutorList/actions/types';

// To be deleted when activity add is working
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

const initialState = {
  interlocutorList: [],
  lastID: 0
}

export default function reducer(state = initialState, action) {

  switch(action.type) {

    case ADD_INTERLOCUTOR:
      let newID = state.lastID + 1;
      return {...state, interlocutorList: state.interlocutorList.concat(action.interlocutor), lastID: newID};
    
    case GET_INTERLOCUTOR_LIST:
      return { ...state, interlocutorList: action.interlocutorList}

    default:
      return state;
  }
}
