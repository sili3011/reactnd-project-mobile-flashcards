import { addQuestion as addQuestionToAPI } from '../utils/api'

export const RECEIVE_QUESIONS = 'RECEIVE_QUESIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        return addQuestionToAPI(question).catch((error) => console.error(error)).then(() => dispatch(addQuestion(question)));
    }
}