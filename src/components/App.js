import React, { Component, Fragment } from 'react';
import SignIn from '../components/SignIn'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {handleInitialData} from '../actions/shared'
import Home from './Home'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from "./Nav";

class App extends Component {


    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className="App">
                        <Nav/>
                        {this.props.loading
                            ? null
                            : <div>
                                <Route path='/' exact component={Home}/>
                                <Route path='/signin' component={SignIn }/>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading : state.users.noUser === 'yes',
    }
}

export default connect(mapStateToProps)(App)
