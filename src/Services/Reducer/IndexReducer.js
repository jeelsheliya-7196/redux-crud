import {combineReducers} from 'redux'
import StudentReducer from './StuReducer'
import { counter_Reducer } from './CounterReducer';
import { SagaCounter } from './CounterSaga';
import { Authreducer } from './AuthReducer';


const MainReducer = combineReducers({
    StudentReducer,
    counter_Reducer,
    SagaCounter,
    Authreducer
})

export default MainReducer;