import { ADD_DATA_MENU, DEL_DATA_MENU, SHOW_MENU, SHOW_MENU_FORM } from "./MenuType";

export const initialState = {
    data : [
        {
            id : 1,
            name : "Martabak",
            price : "20000"
        },
        {
            id : 2,
            name : "Kwetiau",
             price : "20000"
        }
    ],
    showMenu: false,
    showMenuForm: false
}

const MenuReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DATA_MENU : return {
            ...state,
            data : [...state.data, action.payload]
        }
        case DEL_DATA_MENU : return {
            ...state,
            data : action.payload
        }
        case SHOW_MENU : return {
            ...state,
            showMenu : action.setShowMenu
        }
        case SHOW_MENU_FORM : return {
            ...state,
            showMenuForm : action.setShowMenuForm
        }

        default: return state
    }
}

export default MenuReducer;