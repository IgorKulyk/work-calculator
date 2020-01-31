import workRecords from "../apis/workRecords";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const fetchWorks = () => async dispatch => {
  const response = await workRecords.get("/records");

  dispatch({ type: "FETCH_WORKS", payload: response.data });
};

export const createWork = work => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await workRecords.post("/records", { ...work, userId });

  dispatch({ type: "CREATE_WORK", payload: response.data });
};

export const deleteWork = id => async dispatch => {
  await workRecords.delete(`/records/${id}`);

  dispatch({ type: "DELETE_WORK", payload: id });
};

export const editWork = id => {
  return { type: "EDIT_WORK", payload: id };
};
