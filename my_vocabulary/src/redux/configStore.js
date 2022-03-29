//configStore.js

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import myword from './modules/myword'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const middlewares = [thunk]

// make root Reducer

const enhancer = applyMiddleware(...middlewares)
const rootReducer = combineReducers({ myword })

// make Store
const store = createStore(rootReducer, enhancer)

export default store
