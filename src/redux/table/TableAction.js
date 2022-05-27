import { ADD_DATA_TABLE, DEL_DATA_TABLE, SHOW_TABLE, SHOW_TABLE_FORM } from './TableType';

export const addDataTable = (data) => {
    return {
        type: ADD_DATA_TABLE,
        payload: data
    }
}

export const showTable = (set) => {
    return {
        type: SHOW_TABLE,
        setShowTable: set
    }
}

export const showTableForm = (set) => {
    return {
        type: SHOW_TABLE_FORM,
        setShowTableForm: set
    }
}