// import { reducer } from "./App/reducer";
// import { authReducer } from "./Auth/authReducer";
// import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// const rootReducer = combineReducers({
//   app: reducer,
//   auth: authReducer
// });

// // one way to do is create custom middleware and other is thunk

// // const customMiddleware = (store) => (next) => (action) => {
// //   return typeof action === "function"
// //     ? action(store.dispatch, store.getState)
// //     : next(action);
// // };
// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = configureStore (rootReducer, createComposer(applyMiddleware(thunk)));
// export { store };

import { configureStore } from '@reduxjs/toolkit'

import { reducer } from "./App/reducer";
import { authReducer } from "./Auth/authReducer";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
  app: reducer,
  auth: authReducer
  }
})

export {store}
