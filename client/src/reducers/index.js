import {combineReducers} from "redux";
import auth_reducers from "./auth_reducers";
import alert_reducers from "./alert_reducers";
import contacts_reducers from "./contacts_reducers";

export default combineReducers({auth_reducers, alert_reducers, contacts_reducers});