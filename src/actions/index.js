export const createWork = work => {
  return { type: "CREATE_WORK", payload: work };
};

export const deleteWork = id => {
  return { type: "DELETE_WORK", payload: id };
};

export const editWork = id => {
  return { type: "EDIT_WORK", payload: id };
};
