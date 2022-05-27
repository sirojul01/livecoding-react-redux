import { LOGOUT } from "./LogoutType";

export const logout = (set) => {
    return {
        type: LOGOUT,
        setLogout: set
    }
}