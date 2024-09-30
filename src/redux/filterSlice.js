import { createAction, createSlice } from "@reduxjs/toolkit";

export const changeFilter = createAction("filter/changeFilter");
export const selectNameFilter = (state) => state.filter.name;

const initialState = {
  name: "",
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "filter/changeFilter":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

// const filterSlice = createSlice({});
