import {createSelector} from "reselect";

const getDrugs = (state) => {
    return state.drugsPage.drugs
}

export const getDrugsByLiter = createSelector(getDrugs, (drugs) => {

    let newDrugs = [];

    for (let i = 0; i < drugs.length; i++) {
        for (let j = 0; j < drugs[i].availableVolumes.length; j++) {
            newDrugs.push({
                id: drugs[i].id,
                name: drugs[i].name,
                liter: drugs[i].availableVolumes[j].liters,
                price: drugs[i].availableVolumes[j].priceRub,
                category: drugs[i].categories
            })
        }
    }

    return newDrugs;
});




