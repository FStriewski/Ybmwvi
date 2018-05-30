export const FILTER_BY_NAME = "FILTER_BY_NAME"
export const FILTER_BY_GENDER = "FILTER_BY_GENDER"

export const filterByName = (input) => ({
    type: FILTER_BY_NAME,
    payload: input,
})

export const filterByGender= (input) => ({
    type: FILTER_BY_GENDER,
    payload: input,
})
