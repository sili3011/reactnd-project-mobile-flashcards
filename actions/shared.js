import { handleAddQuestionToDeck, receiveDecks } from './decks';
import { handleAddQuestion, receiveQuestions } from './questions';
import { receiveDecks as receiveDecksFromApi, receiveQuestions as receiveQuestionsFromApi } from '../utils/api';

export function initData() {
    return (dispatch) => {
        receiveDecksFromApi().then(((decks) => dispatch(receiveDecks(JSON.parse(decks)))));
        receiveQuestionsFromApi().then((questions) => dispatch(receiveQuestions(JSON.parse(questions))));
        return ;
    }
}

export function addQuestionHandler(question, deck) {
    return (dispatch) => {
        dispatch(handleAddQuestion(question));
        dispatch(handleAddQuestionToDeck(question, deck));
        return ;
    }
}