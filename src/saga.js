import { put, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* CountAsync(){
    yield delay(2000)
    yield put({ type: 'INCREMENT' })
}

export function* CountWatcher(){
    yield takeEvery('INCREMENT_ASYNC', CountAsync)
}

export default CountAsync;