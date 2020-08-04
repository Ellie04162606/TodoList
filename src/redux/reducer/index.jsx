import { createReducer } from "@reduxjs/toolkit";

const defaultstate = {
  itemList: [],
};

export default createReducer(defaultstate, {
  add_Item: (state, action) => ({
    itemList: [...state.itemList, {id:action.payload.id, content: action.payload.content, status: false }],
  }),
  delete_Item: (state, action) => ({
    itemList: state.itemList.filter((item, index) => action.index !== item.id),
  }),
  mark_Item: (state, action) => ({
    itemList: state.itemList.map((item, index) => {
        if(item.id === action.index)
            return{
                content: item.content,
                status: !item.status
            }
        return item
    }),
  }),
});
