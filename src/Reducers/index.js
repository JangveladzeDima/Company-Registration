import UserSectionReducer from "./status";
import {combineReducers} from "redux";

const AllReducers = combineReducers({
    UserSection : UserSectionReducer,
})

export default AllReducers;