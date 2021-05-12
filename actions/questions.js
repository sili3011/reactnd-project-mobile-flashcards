export const RECEIVE_QUESIONS = 'RECEIVE_QUESIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESIONS,
        questions,
    }
}