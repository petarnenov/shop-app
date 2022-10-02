import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from './root-saga';

const sagaMiddleWare = createSagaMiddleWare(rootSaga);
// root reducer

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleWare,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);

//start
sagaMiddleWare.run(rootSaga);