import { addQuestionToDeck } from "./decks";
import { addQuestion } from "./questions";

export function initData() {
    return (dispatch) => {
        // dispatch(receiveDecks(decks));
        // dispatch(receiveQuestions(questions));
        return;
    }
}

export function addQuestionHandler(question) {
    return (dispatch) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToDeck(question));
        return ;
    }
}