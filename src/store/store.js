import { createStore } from 'redux';
import { rootReducer } from './root-reducer';

// root reducer

// const middleWares = [logger];
// const composeEnhancers = compose(applyMiddleware(...middleWares));

//export const store = createStore(rootReducer, undefined, composeEnhancers);

export const store = createStore(rootReducer);
