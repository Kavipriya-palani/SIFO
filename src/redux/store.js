
import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from './reducer';
import defaultState from './initialState'

  const store = () => {
    const storeValue = createStore(userReducer, defaultState, applyMiddleware(thunk));
    return storeValue
};
export default store