import React from 'react';
import {Component} from 'react'
import {connect} from 'react-redux'

class QuestionResults extends Component {

    render() {
        const {question, authedUser} = this.props
        if (question) {
            const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
            const option1Answered = question.optionOne.votes.includes(authedUser)
            const option1Votes = question.optionOne.votes.length / totalVotes * 100
            const option2Answered = question.optionTwo.votes.includes(authedUser)
            const option2Votes = question.optionTwo.votes.length / totalVotes * 100
            return (
                <div>
                    <h3>Would you rather?</h3>
                    <p>(Chosen answer shown in bold)</p>
                    <div style={option1Answered ? {fontWeight:'bold'} : null}>{question.optionOne.text} ({isNaN(option1Votes) ? 0 : option1Votes}%)</div>
                        <h4>OR</h4>
                    <div style={option2Answered ? {fontWeight:'bold'} : null}>{question.optionTwo.text} ({isNaN(option2Votes) ? 0 : option2Votes}%)</div>
                </div>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps({authedUser, questions}, props) {
    // TODO to uncomment once <Route path='/question/:id/results' component={QuestionResults }/> is in place in App component
    //const {id}  = props.match.params
    // TODO comment out
    const id = '8xf0y6ziyjabvozdd253nd'
    authedUser = 'sarahedo'
    return {
        authedUser,
        question:questions[id]
    }
}

export default connect(mapStateToProps)(QuestionResults)