import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers)

store.subscribe(() => console.log(store.getState()))

export default store