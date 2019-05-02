import React from 'react';
import {connect} from 'react-redux'
import PrivateComponent from "./PrivateComponent"
import {handleSaveQuestion} from '../actions/questions'

class NewQuestion extends PrivateComponent {

    state = {
        option1:'',
        option2:'',
        submittedQuestion:null
    }

    updateText = (e, option) => {
        const value = e.target.value
        // need to access former state here so that I can update the specific option
        this.setState((oldState) => ({
                ...oldState,
                [option]: value
            })
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // clear 'view saved question link'
        this.setState((oldState) => ({
                ...oldState,
                submittedQuestion: null
            })
        )
        // TODO - to change to const
        const {authedUser, dispatch} = this.props


        const question = {
            optionOneText: this.state.option1,
            optionTwoText: this.state.option2,
            author: authedUser
        };
        dispatch(handleSaveQuestion(question))
        this.setState((oldState) => ({
                ...oldState,
            submittedQuestion: question
            })
        )
    }

    render() {
        const redirect = super.render()
        return <div>
            {redirect}
            <h2>New Question</h2>
            {/* show link to saved question if successfully submitted*/}
            {this.state.submittedQuestion && this.props.savedQuestion
            && <a href={`/question/${this.props.savedQuestion.id}`}> View saved question</a>}
            <h3>Would you rather?</h3>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.option1} type='text' placeholder='Option 1'
                       onChange={(e) => this.updateText(e, 'option1')}/>
                <h4>OR</h4>
                <input value={this.state.option2} type='text' placeholder='Option 2'
                       onChange={(e) => this.updateText(e, 'option2')}/>
                <p/>
                <button type='submit' disabled={this.state.option1 === ''|| this.state.option2 === ''}>Add Question</button>
            </form>
        </div>
    }
}

function mapStateToProps(state) {
    const {authedUser} = state
    const savedQuestion = state.questions.savedQuestion
    return {
        authedUser,
        savedQuestion
    }
}

export default connect(mapStateToProps)(NewQuestion)