import create from 'zustand'

export const useStore = create(set => ({
    searchText: '',
    setSearchText: (newSearchText) => set({searchText: newSearchText})
}))