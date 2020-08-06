import actiontype from "../actions/actions_type";

export const addItemAction = (item) => ({
  type: actiontype.ADD_ITEM,
  payload: item,
});

export const deleteItemAction = (inputIndex) => ({
  type: actiontype.DELETE_ITEM,
  index: inputIndex,
});

export const updateItemMarkAction = (inputIndex) => ({
  type: actiontype.MARK_ITEM,
  index: inputIndex,
});

export const getAllItemsAction = (items) => ({
  type: actiontype.GET_ALL_ITEM,
  payload: items,
});
