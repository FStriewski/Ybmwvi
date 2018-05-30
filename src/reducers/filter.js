
import { FILTER_BY_NAME } from '../actions/filter'



export default function (state = "", action) {

    switch (action.type) {
        case FILTER_BY_NAME:
            return action.payload
        default: return state
    }
}