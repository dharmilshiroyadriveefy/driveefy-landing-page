import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  allEmployees: [],
};

export const TicketDashboard = createReducer(initialState, {

  GET_USER_WITH_WILLS_REQUEST: (state) => {
    state.loading = true;
  },
  GET_USER_WITH_WILLS_SUCCESS: (state, action) => {
    state.loading = false;
    state.allEmployees = action.payload;
  },
  GET_USER_WITH_WILLS_FAILURE: (state, action) => {
    state.loading = false;
    state.error = action.payload;  
  },

});
