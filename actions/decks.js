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

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addDeckHandler(deck) {
    return (dispatch) => {
        dispatch(addDeck(deck));
        return ;
        // submitDeck(deck)
        // .catch((e) => {
        //     console.warn('Error in handleToggleTweet: ', e);
        //     dispatch(removeDeck(deck));
        //     alert('There was an error liking the tweet!')
        // });
    }
}

export function addQuestionToDeck(question) {
    return {
        type: ADD_QUESTION_TO_DECK,
        question,
    }
}

export function removeDeck(deck) {
    return {
        type: REMOVE_DECKS,
        deck,
    }
}