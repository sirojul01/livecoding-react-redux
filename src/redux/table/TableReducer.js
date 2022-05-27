import { ADD_DATA_TABLE, DEL_DATA_TABLE, SHOW_TABLE, SHOW_TABLE_FORM } from "./TableType";

const initialState = {
    data : [
        {
            id : 1,
            number : 1,
            status : "Available"
        },
        {
            id : 2,
            number : 2,
            status : "Unavailable"
        }
    ],
    showTable: false,
    showTableForm: false
}

const TableReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_DATA_TABLE : return {
            ...state,
            data : [...state.data, action.payload]
        }

        case SHOW_TABLE : return {
            ...state,
            showTable : action.setShowTable
        }

        case SHOW_TABLE_FORM : return {
            ...state,
            showTableForm : action.setShowTableForm
        }

        default : return state
    }
}

export default TableReducer;