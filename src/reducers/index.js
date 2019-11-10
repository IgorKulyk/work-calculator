import { combineReducers } from "redux";
import workRecordsReducer from "./workRecordsReducer";

export default combineReducers({
  records: workRecordsReducer
});
