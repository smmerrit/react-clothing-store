import { takeLatest,call,put,all } from 'redux-saga/effects'
import { fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'
import ShopActionTypes from './shop.types'
import {firestore, convertCollectionsSnapshot} from '../../firebase/firebase.utils'


export function* fetchCollectionsAsync(){
    
    try{  
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshot,snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
}
    catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
}


export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync )
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}