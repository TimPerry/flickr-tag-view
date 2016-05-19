import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import syncReduxAndCookies from './syncReduxAndCookies';

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

syncReduxAndCookies(store);

export default store;
