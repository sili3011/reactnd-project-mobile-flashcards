import { addQuestionToDeck, receiveDecks } from './decks';
import { handleAddQuestion, receiveQuestions } from './questions';
import { receiveDecks as receiveDecksFromApi, receiveQuestions as receiveQuestionsFromApi } from '../utils/api';

export function initData() {
    return (dispatch) => {
        receiveDecksFromApi().then((decks => dispatch(receiveDecks(decks))));
        receiveQuestionsFromApi().then(dispatch(receiveQuestions(questions)));
        return ;
    }
}

export function addQuestionHandler(question) {
    return (dispatch) => {
        dispatch(handleAddQuestion(question));
        dispatch(addQuestionToDeck(question));
        return ;
    }
}