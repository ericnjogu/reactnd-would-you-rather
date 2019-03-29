import {RECEIVE_USERS} from '../actions/users'

export default function users(state = {noUser:'yes'}, action) {
    const users = action.users
    switch (action.type) {
        case RECEIVE_USERS:
            return users
        default:
            return state
    }
}