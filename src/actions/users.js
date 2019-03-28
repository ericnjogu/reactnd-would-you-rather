export const RECEIVE_USERS = "RECEIVE WATUS"

/**
 * action creator
 */
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}