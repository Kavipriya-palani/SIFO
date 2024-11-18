
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FETCH_LOGIN_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, LOGIN_DETAILS } from '../constant/constant';
import defaultState from './initialState'




export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
     
        case LOGIN_DETAILS:
            return {
                ...state,
                loginDetails: action.payload
            };

      default:
        return state;
    }
  };