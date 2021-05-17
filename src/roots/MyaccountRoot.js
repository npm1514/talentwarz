import React, { Component } from 'react';
import { MyaccountPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <MyaccountPage data={data ? data : {}}/>
    }
}

export default Root;