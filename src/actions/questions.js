import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
import {showLoading, hideLoading} from 'react-redux-loading'
import {addAnswerToUser, addQuestionToUser, removeAnswerFromUser} from '../actions/users'

export const RECEIVE_QUESTIONS = "RECEIVE QUESTIONS"
export const ANSWER_QUESTION = 'ANSWER QUESTION'
export const SAVE_QUESTION = 'SAVE QUESTION'
export const REMOVE_ANSWER_FROM_QUESTION = 'REMOVE ANSWER'


/**
 * action creator
 */
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(question) {
    return (dispatch) => {
        dispatch(showLoading())

        return _saveQuestion(question)
            .then(savedQuestion => {
                dispatch(saveQuestion(savedQuestion))
                dispatch(addQuestionToUser(savedQuestion))
                })
            .then(() => dispatch(hideLoading()))
    }
}

export function saveQuestionAnswer(answer) {
    return {
        type: ANSWER_QUESTION,
        answer
    }
}

export function removeQuestionAnswer(answer) {
    return {
        type: REMOVE_ANSWER_FROM_QUESTION,
        answer
    }
}

export function handleSaveQuestionAnswer (answer) {
    return (dispatch) => {
        dispatch(saveQuestionAnswer(answer))
        dispatch(addAnswerToUser(answer))
        return _saveQuestionAnswer(answer).catch((e) => {
            console.warn('Error in handleSaveQuestionAnswer ', e)
            dispatch(removeQuestionAnswer(answer))
            dispatch(removeAnswerFromUser(answer))
            alert(`There was an error answering the question. Please try again`)
        })
    }
}