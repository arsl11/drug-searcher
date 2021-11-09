import {useQuery} from "react-query";

type Drug = {
    id: number,
    name: string,
    liters: number,
    priceRub: number,
    categories: Array<string>
}
type TFetchDrugs = (inputDrugName: string, page: number) => Promise<Drug[]>
type TGetPaginatedDrugs = (page: number) => Drug[]

const initialDrugs = [
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

const getPaginatedDrugs: TGetPaginatedDrugs = (page) => {
    if (page === 0) {
        return initialDrugs.filter(drug => {
            return drug.id === 1 || drug.id === 2
        })
    }
    if (page === 1) {
        return initialDrugs.filter(drug => {
            return drug.id === 3 || drug.id === 4
        })
    }
    if (page === 2) {
        return initialDrugs.filter(drug => {
            return drug.id === 5 || drug.id === 6
        })
    }
    return initialDrugs
}

const fetchDrugs: TFetchDrugs = (searchText, page) => {

    let paginatedDrugs = getPaginatedDrugs(page)

    let filteredDrugs = paginatedDrugs.filter(drug => {
        return drug.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(filteredDrugs), 1000)
    })
}

export default function useDrugs(inputDrugName: string, page: number) {
    return useQuery<Drug[]>(['drugs', inputDrugName, page], () => fetchDrugs(inputDrugName, page), {
        staleTime: 5000
    });
}