import { ADD_QUESTION, RECEIVE_QUESIONS } from "../actions/questions"

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESIONS:
            return { ...state, ...action.users};
        case ADD_QUESTION:
            return { ...state}
        default: return state
    }
}