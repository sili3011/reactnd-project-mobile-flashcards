import { ADD_DECK, RECEIVE_DECKS } from "../actions/decks";

export default function decks(state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return { ...state, ...action.users};
        case ADD_DECK:
            return { ...state};
        default: return state;
    }
}