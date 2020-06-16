import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
//combine reducer allows the user

export default combineReducers(
    { user: userReducer }
)
