import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()))

export default store
