import React, {Component} from 'react';
// todo uncomment
//import PrivateComponent from './PrivateComponent'
import {connect} from 'react-redux'

// todo uncomment
class LeaderBoard extends Component { //PrivateComponent {


    render() {
        // todo uncomment, add redirect to developed content's wrapping div 
        /*const redirect = super.render()
        return <div>{redirect}Home</div>*/
        const {ranking, users} = this.props

        return <div>
            <h3>Leader Board</h3>
            <ol>
                {ranking.map(idCount => <li key={idCount[0]}>
                    <img src={`../${users[idCount[0]].avatarURL}`} alt={`Avatar of ${users[idCount[0]].name}`} className='avatar'/>
                    {`${users[idCount[0]].name} - Questions: ${users[idCount[0]].questions.length}, Answers: ${Object.keys(users[idCount[0]].answers).length}`}
                </li>)}
            </ol>
        </div>
    }
}
function mapStateToProps(state) {
    const {users} = state
    // sorting credit - https://stackoverflow.com/a/25500462/315385
    const ranking = Object.keys(users).map(id => {
        const total = Object.keys(users[id].answers).length + Object.keys(users[id].questions).length
        return [id, total]
    }).sort((first, second) =>  second[1] - first[1])
    return {
        ranking,
        users,
    }
}

export default connect(mapStateToProps)(LeaderBoard)