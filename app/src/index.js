
import './App.css';
import React , {StrictMode} from "react";
import ReactDOM from "react-dom";
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {titleReducer} from './reducers'
import thunk from 'redux-thunk'

import App from "./App";

const store = createStore (titleReducer,applyMiddleware(thunk));



const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
  <App />
  </Provider>
  </StrictMode>,
  rootElement
)
