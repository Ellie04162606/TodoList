import { createReducer } from "@reduxjs/toolkit";

const defaultstate = {
    itemList : [],
};

export default createReducer(defaultstate, {
  "add_Item": (state, action) => ({
    itemList: [...state.itemList, action.itemText],
  }),
});


