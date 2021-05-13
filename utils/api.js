import { AsyncStorage } from 'react-native';

export function receiveDecks() {
    return AsyncStorage.getItem('decks');
}

export function receiveQuestions() {
    return AsyncStorage.getItem('questions');
}

export function addDeck({ deck, key }) {
    return AsyncStorage.mergeItem('decks', JSON.stringify({
        [key]: deck
    }));
}

export function addQuestion({ question, key }) {
    return AsyncStorage.mergeItem('questions', JSON.stringify({
        [key]: question
    }));
}