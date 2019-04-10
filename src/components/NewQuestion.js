import React from 'react';
import {Component} from 'react'
import {connect} from 'react-redux'
//import {Redirect} from 'react-router-dom'
import PrivateComponent from "./PrivateComponent"

class NewQuestion extends Component {//PrivateComponent {

    state = {
        option1:'',
        option2:''
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
    }

    render() {
        //const redirect = super.render()
        return <div>
            {/*redirect*/}
            <h2>New Question</h2>
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
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)