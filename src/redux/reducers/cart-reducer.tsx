const ADD_DRUG = 'ADD_DRUG'
const DELETE_DRUG = 'DELETE_DRUG'

type CartDrugType = {
    id: number,
    name: string,
    liter: number,
    price: number
}

type InitialStateType = {
    drugs: Array<CartDrugType>
}

let initialState: InitialStateType = {
    drugs: []
}

export const cartReducer = (state = initialState, action: any) => {
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

type addDrugActionType = {
    type: typeof ADD_DRUG,
    drug: CartDrugType

}
export const addDrugActionCreator = (drug: CartDrugType) : addDrugActionType => ({type: ADD_DRUG, drug})

type deleteDrugActionType = {
    type: typeof DELETE_DRUG,
    drug: CartDrugType

}
export const deleteDrugActionCreator = (drug: CartDrugType) : deleteDrugActionType=> ({type: DELETE_DRUG, drug})