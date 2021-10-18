const ADD_DRUG = 'ADD_DRUG'
const DELETE_DRUG = 'DELETE_DRUG'

let initialState = {
    drugs: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DRUG:
            return {
                ...state,
                drugs: [...state.drugs, action.drug]
            }
        case DELETE_DRUG:
            return {
                ...state,
                drugs: [...state.drugs.filter((drug) => {
                    return drug !== action.drug
                })]
            }
        default:
            return state
    }
    return state
}

export const addDrugActionCreator = (drug) => ({type: ADD_DRUG, drug})
export const deleteDrugActionCreator = (drug) => ({type: DELETE_DRUG, drug})