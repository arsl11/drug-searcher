import {useQuery} from "react-query";

type Drug = {
    id: number,
    name: string,
    liters: number,
    priceRub: number,
    categories: Array<string>
}
type TFetchDrugs = (inputDrugName: string, page: number) => Promise<Drug[]>
type TGetPagedDrugs = (page: number) => Drug[]

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

const getPagedDrugs: TGetPagedDrugs = (page: number) => {
    if (page === 1) {
        return initialDrugs.filter(drug => {return drug.id === 1 || drug.id === 2 || drug.id === 3})
    }
    if (page === 2) {
        return initialDrugs.filter(drug => {return drug.id === 4 || drug.id === 5 || drug.id === 6})
    }
    return initialDrugs
}

const fetchDrugs: TFetchDrugs = (inputDrugName, page) => {

    let pagedDrugs = getPagedDrugs(page)

    let filteredDrugs = pagedDrugs.filter(drug => {
        return drug.name.toLowerCase().includes(inputDrugName.toLowerCase())
    })
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(filteredDrugs), 1000)
    })
}

export default function useDrugs(inputDrugName: string, page: number) {

    return useQuery<Drug[]>(['drugs', inputDrugName, page], () => fetchDrugs(inputDrugName, page));
}