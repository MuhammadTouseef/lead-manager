import {combineReducers} from "redux";
import leads from './leads'
import error from './error'
export default  combineReducers({

    leads,
    error

})
