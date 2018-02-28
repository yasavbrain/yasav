import moment from 'moment';
import 'moment/locale/fr';

import { GET_INTERLOCUTOR_FROM_REQUEST } from '../screens/SearchInput/actions/types';


moment.locale('fr');

const initialState = {
  interlocutorFromRequest: [],
};

export default function reducer(state = initialState, action) {
  console.log(action.interlocutorFromRequest)
  switch (action.type) {
    case GET_INTERLOCUTOR_FROM_REQUEST:
      return { ...state, interlocutorFromRequest: action.interlocutorFromRequest };
    default:
      return state;
  }
}
