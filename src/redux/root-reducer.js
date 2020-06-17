import { combineReducers } from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
//combine reducer allows the user

export default combineReducers(
    { user: userReducer,
      cart: cartReducer 
    
    })
