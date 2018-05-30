
import { FILTER_BY_NAME, FILTER_BY_GENDER } from '../actions/filter'

const initalState = {
    term: "",
    gender: "all",
}

export default function (state = initalState, action) {

    switch (action.type) {
        case FILTER_BY_NAME:
            return {...state, term: action.payload }
        case FILTER_BY_GENDER:
            return { ...state, gender: action.payload }
        default: return state
    }
}
