let initialState = {
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
    ]
}

const drugsReducer = (state = initialState, action) => {
    return state;
}

export default drugsReducer;