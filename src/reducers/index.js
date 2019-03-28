import questions from './questions'
import  users from './users'
import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({users, questions, loadingBar: loadingBarReducer})