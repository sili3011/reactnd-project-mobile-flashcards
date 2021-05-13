export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECKS = 'REMOVE_DECKS';
export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_DECK';

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addQuestionToDeck(question) {
    return {
        type: ADD_QUESTION_TO_DECK,
        question,
    }
}