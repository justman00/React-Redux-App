import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { recipeReducer } from "./reducers/recipeReducer";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore(recipeReducer, applyMiddleware(thunk, logger));
console.log("store", store);
/*
 const myThunk = (store) => (next) => (action) => {
  if(typeof action === 'object') {
    next(action)
   } else if(typeof action === 'function') {
    action(store.dispatch);
  }
 }

 const logger = (store) => (next) => (action) => {
  // next - ne duce la urmatorul pas
  console.group(action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  next(action);
  console.log("next state", store.getState());
  console.groupEnd();
};
*/
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
