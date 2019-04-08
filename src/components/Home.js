import React from 'react';
import PrivateComponent from './PrivateComponent'

export default class Home extends PrivateComponent {
    render() {
        const redirect = super.render()
        return <div>{redirect}Home</div>
    }
}