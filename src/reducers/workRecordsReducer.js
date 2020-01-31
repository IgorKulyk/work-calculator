import _ from "lodash";

export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_WORK":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_WORK":
      return _.omit(state, { id: action.payload });
      // return state.filter(element => element.id !== action.payload)
    case "EDIT_WORK":
      return state;
    case "FETCH_WORKS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
