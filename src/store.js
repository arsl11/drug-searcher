import create from 'zustand'
import {devtools, persist} from "zustand/middleware";

let store = (set) => ({
    searchText: '',
    setSearchText: (newSearchText) => set({searchText: newSearchText}),
    cartDrugs: getLocalStorage('cartDrugs') || [],
    addDrug: (drug) =>
        set((state) => {
            if (state.cartDrugs.find(cartDrug => cartDrug.id === drug.id)) {
                return {state}
            }
            return {
                cartDrugs: [...state.cartDrugs, drug]
            }
        }),
    deleteDrug: (drug) =>
        set((state) => ({
            cartDrugs: [...state.cartDrugs.filter((cartDrug) => {
                return cartDrug.id !== drug.id
            })]
        })),
    setAmount: (drug, value) =>
        set((state) => ({
            cartDrugs: state.cartDrugs.map((cartDrug) => {
                if (cartDrug.id === drug.id) {
                    return {
                        ...cartDrug,
                        amount: value < 1 ? 1 : value
                    }
                }
                return cartDrug
            })
        }))
})

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));

const useStore = create(persist((devtools(store)), {name: 'drug-store'}))

export default useStore







