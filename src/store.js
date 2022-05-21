//data storing
import { createStore } from "redux";

import rootReducer from "./reducers/index";

import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'root',
    storage,
}

   //global store
   const persistedReducer=persistReducer(persistConfig, rootReducer)
  export const store= createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export const store=createStore(persistedReducer);
export const persistor= persistStore(store)


