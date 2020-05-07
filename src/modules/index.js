import { combineReducers } from 'redux'
// import counter from './counter'
import addBookReducer from '../reducers/addBook'

export default combineReducers({
  addBook: addBookReducer
})
