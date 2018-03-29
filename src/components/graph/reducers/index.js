import { GET_ALL_WEIGHTED_TAGS } from '../screens/GraphTagDisplay/actions/types';

const initialState = {
  weightedTagList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_WEIGHTED_TAGS:
      return { ...state, weightedTagList: action.weightedTagList };
    default:
      return state;
  }
}
