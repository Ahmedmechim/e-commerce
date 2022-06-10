import thunk from "redux-thunk";
import {createStore,applyMiddleware,compose, combineReducers} from "redux"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { prductReducer } from "./ProductReducer";
import { anyReducer } from "./anyReducer";
import { userReducer } from "./userReducer";

let devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
let persistConfig = {
    key: 'root',
    storage,
  }

const allReducers = combineReducers({
    product: prductReducer,
    any: anyReducer,
    user: userReducer
})
const persistedReducer = persistReducer(persistConfig,allReducers)
export const store=createStore(persistedReducer,compose(applyMiddleware(thunk),devtools))
export const persistor = persistStore(store)