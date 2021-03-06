import { ADD_DECK, RECEIVE_DECKS } from "../actions/decks";

export default function decks(state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return { ...action.decks };
        case ADD_DECK:
            return { ...state, [action.deck.id]: {...action.deck} };
        default: return state;
    }
}