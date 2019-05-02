import React from 'react';

import PrivateComponent from './PrivateComponent'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

// todo uncomment
class Home extends PrivateComponent {
    state = {
        show: 'unanswered'
    }

    filterQuestions = (questions, authedUser, users) => {
        return (this.state.show === 'answered'
            ? Object.keys(questions).filter(id => questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))
            : Object.keys(questions).filter(id => ! questions[id].optionOne.votes.includes(authedUser) && ! questions[id].optionTwo.votes.includes(authedUser)))
        .map(id => <li>{`${users[questions[id].author].name} asks:`}<Link to={`question/${id}`}> {`${questions[id].optionOne.text} or ${questions[id].optionTwo.text}`}</Link></li>)
    }

    updateOption = (e) => {
        const value = e.target.value
        this.setState({
            show: value
        })
    }

    render() {
        const redirect = super.render()
        const {questions, users, authedUser} = this.props


        return <div>
                {redirect}
                <label htmlFor='answered'>answered</label>
                <input value='answered' type='radio' id='answered'
                       onClick={this.updateOption} name='questions'
                />
                <label htmlFor='unanswered'>unanswered</label>
                <input value='unanswered' type='radio' id='unanswered'
                       onClick={this.updateOption}
                       name='questions' defaultChecked={true}
                />
            <ol>
                {this.filterQuestions(questions, authedUser, users)}
            </ol>
        </div>
    }
}
function mapStateToProps(state) {
    const {authedUser, questions, users} = state
    return {
        authedUser,
        questions,
        users
    }
}

export default connect(mapStateToProps)(Home)