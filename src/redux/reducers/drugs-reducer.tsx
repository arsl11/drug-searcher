type DrugType = {
    id: number,
    name: string,
    liters: number,
    priceRub: number,
    categories: Array<string>

}

type InitialStateType = {
    drugs: Array<DrugType>
}

let initialState : InitialStateType = {
    drugs: [
        {
            id: 1,
            name: "Bug Destroyer",
            liters: 1,
            priceRub: 99.90,
            categories: ['bug', "anti bug"]
        },
        {
            id: 2,
            name: "Bug Destroyer",
            liters: 3,
            priceRub: 249.90,
            categories: ['bug', "anti bug"]
        },

        {
            id: 3,
            name: "Bug Destroyer",
            liters: 5,
            priceRub: 399.90,
            categories: ['bug', "anti bug"]
        },
        {
            id: 4,
            name: 'Acetaminophen',
            liters: 1,
            priceRub: 50.90,
            categories: ['analgesics']
        },
        {
            id: 5,
            name: 'Acetaminophen',
            liters: 2,
            priceRub: 79.90,
            categories: ['analgesics']
        },
        {
            id: 6,
            name: 'Butofan',
            liters: 1,
            priceRub: 100.90,
            categories: ['stimulant']
        }
    ]
}

const drugsReducer = (state = initialState, action: any) => {
    return state;
}

export default drugsReducer;