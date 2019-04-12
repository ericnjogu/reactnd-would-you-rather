import {RECEIVE_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER} from '../actions/users'

export default function users(state = {noUser:'yes'}, action) {
    const users = action.users
    switch (action.type) {
        case RECEIVE_USERS:
            return users
        case ADD_ANSWER_TO_USER:
            const { authedUser, qid, answer } = action.answer
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
        case ADD_QUESTION_TO_USER:
            const authedUser2 = action.question.author
            return {
                ...state,
                [authedUser2]: {
                    ...state[authedUser2],
                    questions: state[authedUser2].questions.concat([action.question.id])
                }
            }
        default:
            return state
    }
}