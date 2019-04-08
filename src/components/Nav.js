import React, {Component, Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
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
                                <NavLink to='/signout'>
                                    Sign Out
                                </NavLink>
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