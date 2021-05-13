import { ADD_QUESTION, RECEIVE_QUESIONS } from "../actions/questions"

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESIONS:
            return { ...action.questions };
        case ADD_QUESTION:
            return { ...state, [action.question.id]: {...action.question} };
        default: return state
    }
}