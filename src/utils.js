export const getPageCount = (totalCount, per_page) => {
    return Math.ceil(totalCount/per_page)
}

export const getPagesArr = (totalPages) => {
    const results = []

    for (let i = 0; i < totalPages; i++) {
        results.push(i + 1)
    }

    return results
}