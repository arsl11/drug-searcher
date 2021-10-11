const ADD_DRUG = 'ADD_DRUG'

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
        default:
            return state
    }
    return state
}

export const addDrugActionCreator = (drug) => ({type: ADD_DRUG, drug})