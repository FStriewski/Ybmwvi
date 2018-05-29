
import { FETCH_ALL_PEOPLE } from '../actions/people'



export default function (state = [], action) {

    switch (action.type) {
        case FETCH_ALL_PEOPLE:
            return action.payload
        default: return state
    }
}
