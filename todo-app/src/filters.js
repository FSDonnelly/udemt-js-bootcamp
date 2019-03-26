
const filters = {
    searchText: '',
    hideCompleted: false
}

// getFilters
const getFilters = () => filters

// setFilters
const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
    }

    if (typeof updates.hideCompleted === 'boolean') {
        filters.hideCompleted = updates.hideCompleted
    }
}

export { getFilters, setFilters }
