import { combineReducers } from "redux";
import LoginReduce from "./auth/login/LoginReducer";
import LogoutReducer from "./auth/logout/LogoutReducer";
import HomeReducer from './home/HomeReducer';
import MenuReducer from "./menu/MenuReducer";
import TableReducer from "./table/TableReducer";

const rootReducer = combineReducers({
    home: HomeReducer,
    login: LoginReduce,
    logout: LogoutReducer,
    menu: MenuReducer,
    table: TableReducer
})

export default rootReducer;