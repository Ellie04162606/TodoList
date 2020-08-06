import { createReducer } from "@reduxjs/toolkit";
import {
  ADD_ITEM,
  DELETE_ITEM,
  MARK_ITEM,
  GET_ALL_ITEM,
} from "../actions/actions_type.js";
const defaultstate = {
  itemList: [],
};

export default createReducer(defaultstate, {
  [ADD_ITEM]: (state, action) => ({
    itemList: [
      ...state.itemList,
      {
        id: action.payload.id,
        content: action.payload.content,
        status: action.payload.status,
      },
    ],
  }),

  [DELETE_ITEM]: (state, action) => ({
    itemList: state.itemList.filter((item) => action.index !== item.id),
  }),

  [MARK_ITEM]: (state, action) => ({
    itemList: state.itemList.map((item) => {
      const result = action.index;
      if (item.id === result.id) {
        return {
          id: result.id,
          content: result.content,
          status: result.status,
        };
      }
      return item;
    }),
  }),

  [GET_ALL_ITEM]: (state, action) => ({
    itemList: action.payload,
  }),
});
