import { ADD_QUESTION } from "../actions/questions"

export default function questions(state = {}, action) {
    switch(action.type) {
        case ADD_QUESTION:
            return { ...state}
        default: return state
    }
}