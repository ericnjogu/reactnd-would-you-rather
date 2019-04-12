import React from 'react';
import {Component} from 'react'
import {connect} from 'react-redux'

class Question extends Component {
    state = {
        chosenOption: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    updateOption = (e) => {
        const value = e.target.value
        this.setState({
            chosenOption: value
        })
    }

    render() {
        const {question} = this.props
        if (question) {
            return (
                <div>
                    <h3>Would you rather?</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='optionOne'>{question.optionOne.text}</label>
                        <input value='optionOne' type='radio' id='optionOne'
                               onClick={this.updateOption} name='answer'/>
                        <h4>OR</h4>
                        <label htmlFor='optionTwo'>{question.optionTwo.text}</label>
                        <input value='optionTwo' type='radio' id='optionTwo'
                               onClick={this.updateOption} name='answer'/>
                        <p/>
                        <button type='submit' disabled={this.state.chosenOption === ''}>Answer</button>
                    </form>
                </div>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps({authedUser, questions}, props) {
    // TODO to uncomment once <Route path='/question/:id' component={Question }/> is in place in App component
    //const {id}  = props.match.params
    // TODO comment out
    const id = '8xf0y6ziyjabvozdd253nd'
    return {
        authedUser,
        question:questions[id]
    }
}

export default connect(mapStateToProps)(Question)