import { SHOW_LOGIN, AUTH_LOGIN } from "./LoginType";

export const showLogin = (data) => {
    return {
        type: SHOW_LOGIN,
        setLogin: data
    }
}

export const setAuthLogin = (set) => {
    return {
        type: AUTH_LOGIN,
        setAuthLogin: set
    }
}