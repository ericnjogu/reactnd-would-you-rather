import React, {Component, Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleLogoutUser} from "../actions/authedUser";

class Nav extends Component {
    handleLogout = (e) => {
        e.preventDefault()
        this.props.dispatch(handleLogoutUser())

    }

    render() {
        const {username} = this.props
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    {username === null &&
                        <li>
                            <NavLink to='/signin' activeClassName='active'>
                                Sign In
                            </NavLink>
                        </li>
                    }
                    {username !== null &&
                        <Fragment>
                            <li>
                                Welcome, {username}
                            </li>
                            <li>
                                <a href='/logout' onClick={this.handleLogout}>Sign Out</a>
                            </li>
                        </Fragment>
                    }

                </ul>
            </nav>
        )
    }


}

function mapStateToProps({authedUser, users}) {
    const username = authedUser === null ? null : users[authedUser].name
    return {
        username
    }
}

export default connect(mapStateToProps)(Nav)