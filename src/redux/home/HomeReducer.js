import { SHOW_DASHBOARD } from "./HomeType";

const initialState = {
    showDashboard : true
}

const HomeReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_DASHBOARD : return {
            ...state,
            showDashboard : action.setDashboard
        }
        default: return state
    }
}

export default HomeReducer;