import React, { Component } from 'react';

class SignIn extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        //TODO
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
        const users = [{id: 'sarahedo', name: 'Sarah Edo'}, {id: 'tylermcginnis', name: 'Tyler McGinnis'}]
        return <div>
            <h3>Sign In</h3>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <select id='user-list' onChange={this.handleUserSelect}>
                        <option value=''>Choose one</option>
                        {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    }
}

export default SignIn