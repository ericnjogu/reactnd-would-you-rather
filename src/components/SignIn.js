import React, { Component } from 'react';
import {connect} from 'react-redux'
import {handleLoginUser} from '../actions/authedUser'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleLoginUser(this.state.chosenUserId))

    }

    state = {
        chosenUserId:''
    }

    handleUserSelect = (e) => {
        e.preventDefault()
        const userId = e.target.value
        this.setState(
            {
                chosenUserId:userId
            }
        )
    }

    render() {
        const {users, authedUser} = this.props
        if (authedUser !== null) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <select id='user-list' onChange={this.handleUserSelect} value={this.state.chosenUserId}>
                            <option value=''>Choose one</option>
                            {Object.keys(users).map(id => <option key={id} value={id}>{users[id].name}</option>)}
                        </select>
                    </div>
                    <button type='submit' disabled={this.state.chosenUserId === ''}>Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {users, authedUser} = state
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(SignIn)