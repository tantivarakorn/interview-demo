import addBookReducer from './addBook';
import {combineReducers} from "redux";

const allReducers = combineReducers({
  addBook: addBookReducer,
});
export default allReducers;
