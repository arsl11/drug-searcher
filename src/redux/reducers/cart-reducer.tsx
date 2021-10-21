import store from "../store";

const ADD_DRUG = 'ADD_DRUG'
const DELETE_DRUG = 'DELETE_DRUG'
const SET_AMOUNT = 'SET_AMOUNT'

type CartDrugType = {
    id: number,
    name: string,
    liter: number,
    price: number,
    amount: number
}

type InitialStateType = {
    drugs: Array<CartDrugType>
}

const persistedState = localStorage.getItem('cartState')
    ? JSON.parse(localStorage.getItem('cartState') as string)
    : null

let initialState : InitialStateType = persistedState ? persistedState : {
    drugs: []
}


export const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_DRUG:
            if (state.drugs.find(drug => drug.liter === action.drug.liter && drug.name === action.drug.name)) {
                return {
                    ...state,
                }
            }
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
        case SET_AMOUNT:
            return {
                ...state,
                drugs: state.drugs.map((drug) => {
                    if (drug === action.drug) {
                        return {
                            ...drug,
                            amount: action.value < 1 ? 1 : action.value
                        }
                    }
                    return drug
                })
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
export const addDrug = (drug: CartDrugType) : addDrugActionType => ({type: ADD_DRUG, drug})

type deleteDrugActionType = {
    type: typeof DELETE_DRUG,
    drug: CartDrugType

}
export const deleteDrug = (drug: CartDrugType) : deleteDrugActionType => ({type: DELETE_DRUG, drug})

export const setAmount = (drug: CartDrugType, value: number) => ({type: SET_AMOUNT, drug, value})