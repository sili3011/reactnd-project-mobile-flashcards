import { addDeck as addDeckToAPI } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK';

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function handleAddDeck(deck) {
    return (dispatch) => {
        return addDeckToAPI({deck, key: deck.id}).catch((error) => console.error(error)).then(() => dispatch(addDeck(deck)));
    }
}

export function handleAddQuestionToDeck(question, deck) {
    deck.questions = deck.questions.concat(question);
    return (dispatch) => {
        return addDeckToAPI({deck, key: deck.id}).catch((error) => console.error(error)).then(() => dispatch(addDeck(deck)));
    }
}
