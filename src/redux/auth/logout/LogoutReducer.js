import { LOGOUT } from "./LogoutType";

const initialState = {
    logout : true
}

const LogoutReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGOUT : return {
            ...state,
            logout : action.setLogout
        }

        default: return state
    }
}

export default LogoutReducer;