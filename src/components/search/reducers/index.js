import moment from 'moment';
import 'moment/locale/fr';

import { GET_INTERLOCUTOR_LIST_FROM_REQUEST } from '../../interlocutor/screens/InterlocutorList/actions/types';


moment.locale('fr');

const initialState = {
  interlocutorListFromRequest: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_INTERLOCUTOR_LIST_FROM_REQUEST:
      return { ...state, interlocutorListFromRequest: action.interlocutorListFromRequest };
    default:
      return state;
  }
}
