import { submitDeck } from "../utils/api";

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECKS = 'REMOVE_DECKS';

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECKS,
        deck,
    }
}

export function addDeckHandler(deck) {
    return (dispatch) => {
        dispatch(addDeck(deck));

        return submitDeck(info).catch((e) => {
            console.warn('Error in handleToggleTweet: ', e);
            dispatch(removeDeck(deck));
            alert('There was an error liking the tweet!')
        });
    }
}

function removeDeck(deck) {
    return {
        type: REMOVE_DECKS,
        deck,
    }
}