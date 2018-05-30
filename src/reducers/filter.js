
import { FILTER_BY_NAME } from '../actions/filter'

const initalState = {
    term: "",
    gender: "All",
}

export default function (state = initalState, action) {

    switch (action.type) {
        case FILTER_BY_NAME:
            return action.payload
        default: return state
    }
}
