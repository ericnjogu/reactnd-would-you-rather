import questions from './questions'
import  users from './users'
import authedUser from './authedUser'
import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({authedUser, users, questions, loadingBar: loadingBarReducer})