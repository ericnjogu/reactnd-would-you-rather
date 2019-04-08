import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'

class PrivateComponent extends Component {
    render() {
        const {authedUser} = this.props
        return authedUser === null ? <Redirect to='/signin'/> : null
    }
}

function mapStateToProps(state) {
    const {authedUser} = state
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(PrivateComponent)