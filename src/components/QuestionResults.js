import React from 'react';
import {connect} from 'react-redux'
import PrivateComponent from "./PrivateComponent";

class QuestionResults extends PrivateComponent {

    render() {
        const redirect = super.render()
        const {question, authedUser} = this.props
        if (question) {
            const optionOneVoteCount = question.optionOne.votes.length;
            const optionTwoVoteCount = question.optionTwo.votes.length;
            const totalVotes = optionOneVoteCount + optionTwoVoteCount
            const option1Answered = question.optionOne.votes.includes(authedUser)
            const option1VotesPercent = optionOneVoteCount / totalVotes * 100
            const option2Answered = question.optionTwo.votes.includes(authedUser)
            const option2VotesPercent = optionTwoVoteCount / totalVotes * 100
            return (
                <div>
                    {redirect}
                    <h3>Would you rather?</h3>
                    <p>(Chosen answer shown in bold)</p>
                    <div style={option1Answered ? {fontWeight:'bold'} : null}>
                        {question.optionOne.text} - {`${isNaN(option1VotesPercent) ? 0 : option1VotesPercent}%, ${optionOneVoteCount} vote(s)`}
                    </div>
                        <p>OR</p>
                    <div style={option2Answered ? {fontWeight:'bold'} : null}>
                        {question.optionTwo.text} - {`${isNaN(option2VotesPercent) ? 0 : option2VotesPercent}%, ${optionTwoVoteCount} vote(s)`}
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps({authedUser, questions}, props) {
    const {id}  = props.match.params
    return {
        authedUser,
        question:questions[id]
    }
}

export default connect(mapStateToProps)(QuestionResults)