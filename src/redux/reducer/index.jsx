import { createReducer } from "@reduxjs/toolkit";

const defaultstate = {
  itemList: [],
};

export default createReducer(defaultstate, {
  add_Item: (state, action) => ({
    itemList: [...state.itemList, { content: action.itemText, status: false }],
  }),
  delete_Item: (state, action) => ({
    itemList: state.itemList.filter((item, index) => action.index !== index),
  }),
  mark_Item: (state, action) => ({
    itemList: state.itemList.map((item, index) => {
        if(index === action.index)
            return{
                content: item.content,
                status: !item.status
            }
        return item
    }),
  }),
});
