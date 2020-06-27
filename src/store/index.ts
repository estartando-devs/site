import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
  Store,
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { IStudentState, studentReducer } from "./ducks/student.duck";

/* PLOP_DUCKS_IMPORT */

const rootReducer = combineReducers({
  /* PLOP_COMBINE_IMPORT */
  studentReducer,
});

interface ApplicationState {
  studentReducer: IStudentState,
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  storage,
  key: "root",
  whitelist: ["userReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

export { store, persistor };
