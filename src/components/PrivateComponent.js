import React, { Component } from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'

class PrivateComponent extends Component {
    render() {
        const {authedUser} = this.props
        const redirect = {
            pathname: '/signin',
            search: `?from=${this.props.location.pathname}`
        }
        return authedUser === null ? <Redirect to={redirect}/> : null
    }
}

function mapStateToProps(state) {
    const {authedUser} = state
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(PrivateComponent)