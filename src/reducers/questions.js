import {RECEIVE_QUESTIONS, SAVE_QUESTION, ANSWER_QUESTION} from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action.answer
            // clear current selections
        const clearedState = {
            ...state,
                [qid]: {
            ...state[qid],
                    ['optionOne']: {
                ...state[qid]['optionOne'],
                        votes: state[qid]['optionOne'].votes.filter(userName => userName !== authedUser)
                },
                    ['optionTwo']: {
                        ...state[qid]['optionTwo'],
                        votes: state[qid]['optionTwo'].votes.filter(userName => userName !== authedUser)
                    }
            }
        }
            return {
                ...clearedState,
                [qid]: {
                    ...clearedState[qid],
                    [answer]: {
                        ...clearedState[qid][answer],
                        votes: clearedState[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default:
            return state
    }
}