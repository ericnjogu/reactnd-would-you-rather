import React, { Component, Fragment } from 'react';
import '../App.css';
import SignIn from '../components/SignIn'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {handleInitialData} from '../actions/shared'

class App extends Component {


    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
    return (
        <Fragment>
            <LoadingBar/>
            <div className="App">
                {this.props.loading
                    ? null
                    : <SignIn/>
                }
            </div>
        </Fragment>
    );
    }
}

function mapStateToProps(state) {
    return {
        loading : state.users.noUser === 'yes'
    }
}

export default connect(mapStateToProps)(App)
