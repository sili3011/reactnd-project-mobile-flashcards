import { addQuestionToDeck } from "./decks";
import { addQuestion } from "./questions";

export function addQuestionHandler(question) {
    return (dispatch) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToDeck(question));
        return ;
    }
}