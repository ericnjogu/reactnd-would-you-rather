import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PrivateComponent from "./PrivateComponent";

class NewQuestion extends PrivateComponent {
    render() {
        const redirect = super.render()
        return <div>
            {redirect}
            New Question
        </div>
    }
}

export default connect()(NewQuestion)