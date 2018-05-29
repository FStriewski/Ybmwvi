export const FILTER_BY_NAME = "FILTER_BY_NAME"

export const filterByName = (input) => ({
    type: FILTER_BY_NAME,
    payload: input,
})
