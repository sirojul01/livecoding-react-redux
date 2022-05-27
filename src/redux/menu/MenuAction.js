import { ADD_DATA_MENU, DEL, DEL_DATA_MENU, SHOW_MENU, SHOW_MENU_FORM } from "./MenuType";

export const addDataMenu = (data) => {
    return {
        type: ADD_DATA_MENU,
        payload: data
    }
}

export const deleteDataMenu = (data) => {
    return {
        type: DEL_DATA_MENU,
        payload: data
    }
}

export const showMenu = (set) => {
    return {
        type: SHOW_MENU,
        setShowMenu: set
    }
}

export const showMenuForm = (set) => {
    return {
        type: SHOW_MENU_FORM,
        setShowMenuForm: set
    }
}