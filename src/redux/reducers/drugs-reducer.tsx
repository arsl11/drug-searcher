type VolumeType = {
    liters: number,
    priceRub: number
}

type DrugType = {
    id: number,
    name: string,
    availableVolumes: Array<VolumeType>,
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
            availableVolumes: [
                {
                    liters: 1,
                    priceRub: 99.90
                },
                {
                    liters: 3,
                    priceRub: 249.90
                },
                {
                    liters: 5,
                    priceRub: 399.90
                }
            ],
            categories: ["anti bug"]
        },
        {
            id: 2,
            name: 'Acetaminophen',
            availableVolumes: [
                {
                    liters: 1,
                    priceRub: 50.90
                },
                {
                    liters: 2,
                    priceRub: 79.90
                },
            ],
            categories: ['analgesics']
        },
        {
            id: 3,
            name: 'Butofan',
            availableVolumes: [
                {
                    liters: 0.1,
                    priceRub: 650.90
                },
            ],
            categories: ['stimulant']
        }

    ]
}

const drugsReducer = (state = initialState, action: any) => {
    return state;
}

export default drugsReducer;