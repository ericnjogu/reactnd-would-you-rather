export const RECEIVE_USERS = "RECEIVE WATUS"
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER"
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER"
export const REMOVE_ANSWER_FROM_USER = "REMOVE_ANSWER_FROM_USER"

    /**
 * action creator
 */
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser(question) {
    return {
        type: ADD_QUESTION_TO_USER,
        question
    }
}

export function addAnswerToUser(answer) {
    return {
        type: ADD_ANSWER_TO_USER,
        answer
    }
}

export function removeAnswerFromUser(answer) {
    return {
        type: REMOVE_ANSWER_FROM_USER,
        answer
    }
}