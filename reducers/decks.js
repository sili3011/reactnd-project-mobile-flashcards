import { ADD_DECK, RECEIVE_DECKS, ADD_QUESTION_TO_DECK } from "../actions/decks";

export default function decks(state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return { ...state, ...action.users};
        case ADD_DECK:
            return { ...state, [action.deck.id]: {...action.deck}};
        case ADD_QUESTION_TO_DECK: 
            return { ...state, [action.question.deckId]: {...state[action.question.deckId], questions: state[action.question.deckId].questions.concat([action.question])}};
        default: return state;
    }
}