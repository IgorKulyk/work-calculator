import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from './authReducer'
import workRecordsReducer from "./workRecordsReducer";

export default combineReducers({
  auth: authReducer,
  records: workRecordsReducer,
  form: formReducer
});
