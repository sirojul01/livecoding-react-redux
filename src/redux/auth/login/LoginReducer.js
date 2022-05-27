import { SHOW_LOGIN, AUTH_LOGIN } from "./LoginType";

const initialState = {
    dataAdmin: {
        username: "admin@example.com",
        password: "12345678"
      },
    showLogin : false,
    authLogin : false
}

const LoginReduce = (state = initialState, action) => {
    switch(action.type){
        case SHOW_LOGIN : return {
            ...state,
            showLogin : action.setLogin
        }

        case AUTH_LOGIN : return {
            ...state,
            authLogin : action.setAuthLogin
        }

        default : return state
    }
}

export default LoginReduce;