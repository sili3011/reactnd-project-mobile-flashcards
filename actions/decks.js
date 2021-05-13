import { addDeck as addDeckToAPI } from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_DECK';

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
        return addDeckToAPI(deck).catch((error) => console.error(error)).then(() => dispatch(addDeck(deck)));
    }
}

export function addQuestionToDeck(question) {
    return {
        type: ADD_QUESTION_TO_DECK,
        question,
    }
}