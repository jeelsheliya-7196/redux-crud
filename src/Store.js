import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './Services/Reducer/IndexReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { CountWatcher } from './saga';
import storage from 'redux-persist/lib/storage';
import {persistStore} from 'redux-persist';
import {persistReducer} from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const sagamiddle = createSagaMiddleware();

const persistConfig = {
    key: 'myroot',
    storage,
    blacklist : ['counter_Reducer']
  }

const persister = persistReducer(persistConfig, MainReducer)

const store = createStore (
    persister
    ,composeEnhancers(applyMiddleware(thunk))
    // ,composeEnhancers(applyMiddleware(sagamiddle))
)
const persistor = persistStore(store)

// sagamiddle.run(CountWatcher)

export  {persistor};
export default store