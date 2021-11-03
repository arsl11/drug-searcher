import create from 'zustand'
import {devtools, persist} from "zustand/middleware";

let searchStore = (set) => ({
    searchText: '',
    setSearchText: (newSearchText) => set({searchText: newSearchText}),
});
let cartStore = (set) => ({
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
    deleteDrug: (drugId) =>
        set((state) => ({
            cartDrugs: [...state.cartDrugs.filter((cartDrug) => {
                return cartDrug.id !== drugId
            })]
        })),
    setAmount: (drugId, value) =>
        set((state) => ({
            cartDrugs: state.cartDrugs.map((cartDrug) => {
                if (cartDrug.id === drugId && isFinite(value)) {
                    return {
                        ...cartDrug,
                        amount: Math.round(value) < 1 ? 1 : Math.round(value)
                    }
                }
                return cartDrug
            })
        }))
});

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));

export const useSearch = create(devtools(searchStore))
export const useCart = create(persist(devtools(cartStore), {name: 'cart-store'}))








