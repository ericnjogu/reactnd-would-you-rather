import {RECEIVE_USERS, ADD_ANSWER_TO_USER} from '../actions/users'

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
        default:
            return state
    }
}