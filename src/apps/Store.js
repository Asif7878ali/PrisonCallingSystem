import { configureStore} from "@reduxjs/toolkit";
import prisonsReducer from '../features/Slices'
import storage from "redux-persist/lib/storage";
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'

const persistConfigration = {
    key:'root',
    version: 1,
    storage
}
const reducer = combineReducers({
    prisons : prisonsReducer
})

const perReducer = persistReducer(persistConfigration, reducer)
export const store = configureStore({
    reducer : perReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})
})

export default store;