
import { FETCH_ALL_PEOPLE, FETCH_CHARACTER } from '../actions/people'



export default function (state = [], action) {

    switch (action.type) {
        case FETCH_ALL_PEOPLE:
            return action.payload
        case FETCH_CHARACTER:
            return action.payload
        default: return state
    }
}
