import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import locationReducer from "./locationReducer";
import userReducer from "./userReducer";
// import currentProductReducer from "./currentProductReducer";

export default combineReducers({
  products: productsReducer,
  location: locationReducer,
  userInfo: userReducer
});
