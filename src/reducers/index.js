import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReducer from "./EmployeeFormReducer";
import EmployeeReducer from "./EmployeeReducer";

const reducers = combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
export default reducers;
