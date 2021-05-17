import React, { Component } from 'react';
import { ContestPage } from '../pages';

class Root extends Component {
    render() {
        const { data } = this.props;
        return <ContestPage data={data ? data : {}}/>
    }
}

export default Root;
